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
  var botPay = {
    text : userName + ", you're all set to work from home today!"
  };

  return res.status(200).json(botPay);
});

module.exports = router;
