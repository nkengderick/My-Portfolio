const createError = require('http-errors');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;


var indexRouter = require('./routes/index');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.use('/', indexRouter);

app.all('*', (req, res, next) => {
    res.status(404);
    if(req.accepts('html')){
      res.sendFile(path.join(__dirname, 'views', '404.html'))}
})

const errorHandler = (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send(err.msg)
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app;
