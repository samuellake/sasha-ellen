var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bio', function(req, res, next) {
  res.render('bio', {});
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.get('/press', function(req, res, next) {
  res.render('press');
});

module.exports = router;
