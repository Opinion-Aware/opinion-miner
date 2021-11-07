const express = require('express');

const carouselController = require('../controllers/carouselController');

const router = express.Router();

// get carousel of IG media 
router.get('/', carouselController.getCarousel, (req, res) => {
    return res.status(200).json(res.locals.igMedia);
});

module.exports = router;