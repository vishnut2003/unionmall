const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('backend/dashboard', {
        is_dashboard: true,
        page_title: 'Dashboard'
    });
})

router.get('/users', (req, res) => {
    res.render('backend/users', {
        is_users: true,
        page_title: 'Users'
    })
})

router.get('/products', (req, res) => {
    res.render('backend/products', {
        is_products: true,
        page_title: 'Products'
    })
})

module.exports = router;