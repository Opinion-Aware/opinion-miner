const express = require('express');

const carouselController = require('../controllers/carouselController');

const router = express.Router();

router.get('/', carouselController.getCarousel, (req, res) => {
    return res.status(200).json({});
});

module.exports = router;