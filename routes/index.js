var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frontend/pages/home');
});

router.get('/register', (req, res) => {
  res.render('frontend/users_pages/register')
})

module.exports = router;
