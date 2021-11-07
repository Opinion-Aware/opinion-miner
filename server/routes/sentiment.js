const express = require('express');

const sentimentController = require('../controllers/sentimentController');

const router = express.Router();

router.get('/', sentimentController.getSentiment, (req, res) => {
    return res.status(200).json(res.locals.sentiment);
  });

module.exports = router;