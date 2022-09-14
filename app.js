const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/catchAsyncErrors');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

// importing all routes
const farmers = require('./routes/farmer');
const companies = require('./routes/company');

app.use('/api/v1', farmers);
app.use('/api/v1', companies);

app.get('/', (req, res) => {
	res.send('<h1>Server is runing </h1>');
});

app.use(errorMiddleware);

module.exports = app;
