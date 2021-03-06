var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('Hello world!');
});

router.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  console.log(req);
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to this test run!'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

router.post('/wfh', function (req, res, next) {
  var userName = req.body.user_name;
  if (req.body.text != "") {
    var dateRange = req.body.text;
  }
  else {
    var dateRange = "today";
  }
  var botPayload = {
    "response_type" : "in_channel",
    "text" : userName + ", you're all set to work from Home " + dateRange + "!"
  };
  return res.status(200).json(botPayload);
});

router.post('/wfb', function (req, res, next) {
  var userName = req.body.user_name;
  if (req.body.text != "") {
    var dateRange = req.body.text;
  }
  else {
    var dateRange = "today";
  }
  var botPayload = {
    "response_type" : "in_channel",
    "text" : userName + ", you're all set to work from the Boulder office " + dateRange + "!"
  };
  return res.status(200).json(botPayload);
});

router.post('/wfd', function (req, res, next) {
  var userName = req.body.user_name;
  if (req.body.text != "") {
    var dateRange = req.body.text;
  }
  else {
    var dateRange = "today";
  }
  var botPayload = {
    "response_type" : "in_channel",
    "text" : userName + ", you're all set to work from the Denver office " + dateRange + "!"
  };
  return res.status(200).json(botPayload);
});

module.exports = router;
