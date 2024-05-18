var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/userHelpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frontend/pages/home', {
    user: req.session.user
  });
});

router.get('/login', (req, res) => {
  res.redirect('/')
})

router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body)
    .then((user) => {
      req.session.user = user;
      req.session.isLogin = true;
      res.redirect('/')
    })
    .catch((err) => {
      res.render('frontend/pages/home', {
        loginErr: err
      })
    })
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

router.get('/register', (req, res) => {
  res.render('frontend/users_pages/register', {
    user: req.session.user
  })
})

module.exports = router;
