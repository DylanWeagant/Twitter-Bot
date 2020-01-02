console.log("The bot is starting");

const fetch = require("node-fetch");
var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

tweetIt();

// 1000*60 is one sec
// setInterval(tweetIt, 1000 * 30);

function tweetIt() {
  
  var r = Math.floor(Math.random() * 100);
  var tweet = {
    status: "here is a random number " + r
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong");
    } else {
      console.log("It works!");
    }
  }
}
