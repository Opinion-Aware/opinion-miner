const fs = require('fs');
const path = require('path');

const sentimentController = {};

sentimentController.getSentiment = (req, res, next) => {

    res.locals.sentiment = { testmsg: 'hello world' }

    // if (!results) {
    //     return next({
    //         log: 'sentimentController.getSentiment: ERROR: Error getting characters data from characters.json file',
    //         message: { err: 'Error occurred in sentimentController.getSentiment. Check server logs for more details.' },
    //     });
    // }

    return next();
};


module.exports = sentimentController;