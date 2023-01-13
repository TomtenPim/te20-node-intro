const  express = require('express');
const  router = express.Router();

const nav = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/contact",
        title: "Contact"
    },
    {
        url: "/error",
        title: "Error"
    },
]

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
        nav: nav,
    });
});

router.get('/about', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Detta är en skolupgift! Now with a route file!',
        title: 'Nunjucks hello world',
        nav: nav,
    });
});

router.get('/contact', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Simon Mikael Ågren! Nummer: 0730738580',
        title: 'Nunjucks hello world',
        nav: nav,
    });
});

module.exports = router