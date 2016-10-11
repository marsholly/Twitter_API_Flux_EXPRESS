const express = require('express')
const router = express.Router();
const Twitter = require('../models/twitter');

router.route('/')
  .get((req, res) => {
    Twitter.getTweets((err, tweets) => {
      res.status(err ? 400: 200).send(err || tweets);
    })
  })


module.exports = router;
