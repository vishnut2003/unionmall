const express = require('express');
const router = express.Router();

const userHelpers = require('../helpers/userHelpers');

router.get('/', (req, res) => {
    res.render('backend/dashboard', {
        is_dashboard: true,
        page_title: 'Dashboard'
    });
})

router.get('/users', (req, res) => {

    userHelpers.getAllUsers()
        .then((users) => {
            console.log(users);
            res.render('backend/users', {
                is_users: true,
                page_title: 'Users',
                users: users
            })
        })
})


router.get('/users/add', (req, res) => {
    res.render('backend/add-user', {
        is_users: true,
        page_title: 'Add User'
    })
})

router.post('/users/add', (req, res) => {
    userHelpers.addOneUser(req.body)
    .then(() => {
        res.redirect('/admin/users')
    })
    .catch((err) => {
        res.render('backend/add-user', {
            is_users: true,
            page_title: 'Add User',
            register_err: err
        })
    })
})

router.get('/users/delete/:username', (req, res) => {
    userHelpers.deleteOneUser(req.params.username)
        .then(() => {
            res.redirect('/admin/users')
        })
})

router.get('/products', (req, res) => {
    res.render('backend/products', {
        is_products: true,
        page_title: 'Products'
    })
})
module.exports = router;