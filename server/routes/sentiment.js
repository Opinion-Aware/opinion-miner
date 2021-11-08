const express = require('express');


const sentimentController = require('../controllers/sentimentController');

const router = express.Router();

//UPDATED TO POST REQUEST
router.post('/', sentimentController.getSentiment, (req, res) => {
    return res.status(200).json(res.locals.sentiment);
  });

module.exports = router;