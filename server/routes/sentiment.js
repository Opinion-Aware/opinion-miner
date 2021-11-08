const express = require('express');


const sentimentController = require('../controllers/sentimentController');

const router = express.Router();

// sentiment analasis for a single post

router.post('/', sentimentController.getSentiment, (req, res) => {
    return res.status(200).json(res.locals.sentiment);
  });

// gets top + bottom 3 analyses 
router.get('/summary', sentimentController.getSentimentSummary, (req, res) => {
  console.log('got this far');
  return res.status(200).json(res.locals.sentimentSummary);
});

module.exports = router;