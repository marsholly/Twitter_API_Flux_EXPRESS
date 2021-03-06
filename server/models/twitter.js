var Twitter = require('twitter');
const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname, '../data/twitters.json');

require('dotenv').config();

var client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

exports.getTweets = (keyWords, cb) =>{
  client.get(`https://api.twitter.com/1.1/search/tweets.json?q=${keyWords}&count=20`, (err, tweets, response)=>{
    if(err) return cb(err);
    return cb(null, tweets);
  })
}

exports.getSomeTweets = (cb) => {
  fs.readFile(pathname, (err, buffer) => {
    if (err) return cb(err);
    let data;
    try {
      data = JSON.parse(buffer);
    } catch(e) {
      data = [];
    }
    cb(null, data);
  });
};

exports.write = (newData, cb) => {
  let json = JSON.stringify(newData);
  fs.writeFile(pathname, json, cb);
}

exports.saveTweet = (body, cb) => {
  exports.getSomeTweets((err, data) => {
    if (err) return cb(err);
    data.push(body);
    exports.write(data, cb);
    cb(null, data);
  });
}

exports.deleteTweet = (id, cb) => {
  exports.getSomeTweets((err, data) => {
    if (err) return cb(err);
    let updatedData = data.filter(tweet => {
      return Number(tweet.id) !== Number(id)
    });
    exports.write(updatedData, cb);
    cb(null, updatedData);
  });
}
