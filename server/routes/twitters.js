const express = require('express')
const router = express.Router();
const Twitter = require('../models/twitter');

router.route('/:keyWords')
  .get((req, res) => {
    let keyWords = req.params.keyWords;
    Twitter.getTweets(keyWords, (err, tweets) => {
      res.status(err ? 400: 200).send(err || tweets);
    })
  });

router.route('/save')
  .get((req, res) => {
    Twitter.getSomeTweets((err, savedTweets) => {
      res.status(err ? 400: 200).send(err || savedTweets);
    })
  })
  .post((req, res) => {
    Twitter.saveTweet(req.body, (err, savedTweets) => {
      res.status(err ? 400: 200).send(err || savedTweets);
    })
  });

router.route('/save/:id')
  .delete((req, res) => {
    let id = req.params.id;
    Twitter.deleteTweet(id, (err, undeletedTweets) => {
      res.status(err ? 400: 200).send(err || undeletedTweets);
    })
  });


module.exports = router;
