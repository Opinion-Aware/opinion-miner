const fs = require('fs');
const path = require('path');

const carouselController = {};

// serve static IG media test data from JS file
carouselController.getCarousel = (req, res, next) => {
    console.log('INSIDE GET CAROUSEL FUNCTION');
    // get test data from JS file 
    const igMediaArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db/igMedia.json'), 'UTF-8'));
    // log error if unable to get data 
    if (!igMediaArray) {
        return next({
            log: 'carouselController.getCarousel: ERROR: Error getting igMedia data from igMedia.json file',
            message: { err: 'Error occurred in carouselController.getCarousel Check server logs for more details.' },
        });
    }
    // save test igMedia data in res.locals for server to return 
    res.locals.igMedia = igMediaArray;
    next();
};

module.exports = carouselController;