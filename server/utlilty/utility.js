/**
 * Utility functions 
 */

const Utility = {}; 

// Input: IG media object 
// Output: single string containing all comment text -> will be used for sentiment analysis 
Utility.getSentimentTextFromIgMedia = (igMedia) => {
    // initalize string to be returned 
    let returnString = ''; 

    // get array of comments from media obj 
    let comments = igMedia.comments; 

    for(let i=0; i<comments.length; i++){
        // add to return string, leave trailing space to comments are separated
        returnString += `${comments[i].text} `; 
    }
    return returnString; 
}

// input: sentiment score between -1 and 1
// output: sentiment score between 0-10
Utility.convertSentimentScore = sentScore => {
    const newValue = (((sentScore + 1) * 10) / 2)
    return Math.round(10 * newValue) / 10;
}

// input: array of sentiment analyses 
// output: summary object for frontend's stats modal 
Utility.getSummaryObject = (sentimentAnalyses, summaryObject) => {

    // sort for frontend 
    sentimentAnalyses.sort((a, b) => a.sentiment_score - b.sentiment_score);

    let averageScore = 0;

    // calculate average score 
    for (let i = 0; i < sentimentAnalyses.length; i++) {
        averageScore += sentimentAnalyses[i].sentiment_score;
    }
    averageScore = averageScore / sentimentAnalyses.length;

    // construct summary text

    // put each analysis in a bucket based on sentiment score 
    let goodPosts = sentimentAnalyses.filter(e => e.sentiment_score > 7);
    let midPosts = sentimentAnalyses.filter(e => e.sentiment_score < 7 && e.sentiment_score > 4.5);
    let badPosts = sentimentAnalyses.filter(e => e.sentiment_score <= 4.5);

    // construct summary text based on post buckets 
    let goodSummary = '';
    let midSummary = '';
    let badSummary = '';
    if (goodPosts.length > 0) {
        goodSummary += `Your users love posts about ${goodPosts[0].hashtags[0]}. `;
    }
    if (midPosts.length > 0) {
        midSummary += `Your users showed indifference towards ${midPosts[0].hashtags[0]}. `;
    }
    if (badPosts.length > 0) {
        badSummary += `Your users didn't like posts about ${badPosts[0].hashtags[0]}. `;
    }

    // construct summaryObject + store in res.locals
    summaryObject.summaryText = goodSummary + midSummary + badSummary;
    summaryObject.averageScore = averageScore;
    summaryObject.analyses = sentimentAnalyses;

    return summaryObject;

}

module.exports = Utility; 