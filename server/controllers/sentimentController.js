const fs = require('fs');
const path = require('path');

const sentimentController = {};

sentimentController.getSentiment = (req, res, next) => {


    if (!results) {
        return next({
            log: 'fileController.getCharacters: ERROR: Error getting characters data from characters.json file',
            message: { err: 'Error occurred in fileController.getCharacters. Check server logs for more details.' },
        });
    }

    return next();
};


module.exports = fileController;