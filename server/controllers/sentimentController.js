const fs = require('fs');
const path = require('path');
const utils = require('../utlilty/utility')
// Imports the Google Cloud client library
const language = require('@google-cloud/language');
const Utility = require('../utlilty/utility');
// google project id
const projectId = 'opinion-miner-331420'
// json file that contains private keys. Contains auth information to talk to google's language api
const keyFilename = path.resolve(__dirname, '../../opinion-miner-331420-9f2db2de5f9c.json')
const client = new language.LanguageServiceClient({ projectId, keyFilename });

const sentimentController = {};

sentimentController.getSentiment = async (req, res, next) => {
    console.log('postID: '); 
    console.log(req.query.postID);
    // EDGE CASE: No postID provided
    if (!req.query.postID) {
        console.log('No PostID provided!'); 
        return next(); 
    }

    // received from client side. Used for finding comments pertaining to the desired post
    const postID = req.query.postID;

    const sentimentCache = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/sentimentCache.json'), 'UTF-8'));


    // if any item in cache then iterate and find matching post id and return the response object
    if (sentimentCache.length !== 0) {
        for (let i = 0; i < sentimentCache.length; i++) {
            if (sentimentCache[i].post_id === postID) {
                res.locals.sentiment = sentimentCache[i]
                return next();
            }
        }
    }
    // otherwise execute the code from below

    // read posts from DB
    const igMediaArr = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/igMedia.json'), 'UTF-8'));

    // Post object that user requested
    let post;
    // find the post client requested and join comments
    for (let i = 0; i < igMediaArr.length; i++) {
        if (igMediaArr[i].id === postID) {
            post = igMediaArr[i]
            break;
        }
    }

    // will contain all comments as one string
    const comments = utils.getSentimentTextFromIgMedia(post);

    // Prepares a document, representing the provided text 
    const document = {
        content: comments,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({ document });

    if (result) {
        const sentiment = result.documentSentiment;

        // dynamically create analysis_description based on sentiment score
        // aribtrarily decided the following breakdown: 
        // good post score: > 7
        // mid post score: between 4.5 and 7
        // bad post: <=4.5
        console.log('sentiment: ');
        console.log(sentiment);
        // call utility function to normalize sentiment score 
        let sentimentScore = utils.convertSentimentScore(sentiment.score);
        let analysisDescription; 
        if (sentimentScore > 7){
            analysisDescription = `Your audience loved this post! It looks like they love content related to ${post.hashtags[0]} and ${post.hashtags[1]}. Try posting more content like this to keep your audience engaged.`;
        } else if (sentimentScore < 7 && sentimentScore > 4.5){
            analysisDescription = `This post was well received overall, though it did not elicit particularly high enthusiasm from your audience. Try performing analyses on more posts to determine what content your audience enjoys the most.`;
        } else{
            analysisDescription = `Your audience reacted negatively to this post. It looks like didn't enjoy content related to ${post.hashtags[0]} and ${post.hashtags[1]}. Avoid posting content like this to keep your audience engaged.`;
        }

        res.locals.sentiment = {
            post_id: postID,
            media_url: post.media_url,
            hashtags: post.hashtags,
            likes_count: post.likes_count,
            username: post.ig_user.username,
            caption: post.caption,
            sentiment_score: sentimentScore,
            sentiment_magnitude: sentiment.magnitude,
            post_date: post.timestamp,
            analysis_date: Date(),
            analysis_description: analysisDescription
        }

        sentimentCache.push(res.locals.sentiment)
        fs.writeFileSync(path.resolve(__dirname, '../db/sentimentCache.json'), JSON.stringify(sentimentCache), 'UTF-8')
        return next();
    } else {
        return next({
            log: 'sentimentController.getSentiment: ERROR: Error getting sentiment data from google',
            message: { err: 'Error occurred in sentimentController.getSentiment. Check server logs for more details.' }
        });
    }
};

// gets top + bottom 3 analyses from senimentCache 
// --> eventually this will be from the database
sentimentController.getSentimentSummary = async (req, res, next) => {
    console.log('INSIDE GET SENTIMENT SUMMARY CONTROLLER');
    try{
        // get all sentiment analyses from storage
        // eventually this will be from the database
        const sentimentAnalyses = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/sentimentCache.json'), 'UTF-8'));

        const emptyDescription = "Looks like you haven't analyzed any posts yet!";

        let summaryObject = {
            summaryText: emptyDescription,
            averageScore: 0,
            analyses: []
        }

        console.log(sentimentAnalyses);

        // EDGE CASE: none are in the DB
        if (sentimentAnalyses.length === 0) return summaryObject;

        // get summaryObject from helper function 
        summaryObject = Utility.getSummaryObject(sentimentAnalyses, summaryObject); 

        // send response 
        res.locals.sentimentSummary = summaryObject;
        return next();

    } catch(error){
        console.log('Error in sentimentController.getSentimentSummary'); 
        console.log(error); 
        return next(error); 
    }
}

module.exports = sentimentController;