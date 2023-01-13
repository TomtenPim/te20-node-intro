const express = require('express');

const app = express();
const port = 3000;
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index');
const createError = require('http-errors')


// app.get('/', (req, res) => {
//     res.send('Hejsan Svejsan!');
// });

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use('/', indexRouter);

// app.get('/418', (req, res) => {
//     res.status(418).send('apa')
// })

app.use(function (req, res, next) {
    next(createError(404))
});

app.use(function (err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error.njk')
})

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});


