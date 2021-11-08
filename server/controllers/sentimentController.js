const fs = require('fs');
const path = require('path');
const utils = require('../utlilty/utility')
// Imports the Google Cloud client library
const language = require('@google-cloud/language');
// google project id
const projectId = 'opinion-miner-331420'
// json file that contains private keys. Contains auth information to talk to google's language api
const keyFilename = path.resolve(__dirname, '../../opinion-miner-331420-9f2db2de5f9c.json')
const client = new language.LanguageServiceClient({ projectId, keyFilename });

const sentimentController = {};

sentimentController.getSentiment = async (req, res, next) => {
    // received from client side. Used for finding comments pertaining to the desired post
    const postID = req.body.postID

    const sentimentCahe = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/sentimentCache.json'), 'UTF-8'));

    // if any item in cache then iterate and find matching post id and return the response object
    if (sentimentCahe.length !== 0) {
        for (let i = 0; i < sentimentCahe.length; i++) {
            if (sentimentCahe[i].post_id === postID) {
                res.locals.sentiment = sentimentCahe[i]
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
        if (igMediaArr[i].id = postID) {
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

        res.locals.sentiment = {
            post_id: postID,
            media_url: post.media_url,
            hashtags: post.hashtags,
            username: post.ig_user.username,
            caption: post.caption,
            sentiment_score: utils.convertSentimentScore(sentiment.score),
            sentiment_magnitude: sentiment.magnitude,
            post_date: post.timestamp,
            analysis_date: Date(),
            analysis_description: 'This is where Text description of how the post was received based on sentiment analysis score would be stored'
        }

        sentimentCahe.push(res.locals.sentiment)
        fs.writeFileSync(path.resolve(__dirname, '../db/sentimentCache.json'), JSON.stringify(sentimentCahe), 'UTF-8')
        return next();
    } else {
        return next({
            log: 'sentimentController.getSentiment: ERROR: Error getting sentiment data from google',
            message: { err: 'Error occurred in sentimentController.getSentiment. Check server logs for more details.' }
        });
    }
};


module.exports = sentimentController;