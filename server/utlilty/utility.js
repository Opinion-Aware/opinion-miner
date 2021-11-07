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

module.exports = Utility; 