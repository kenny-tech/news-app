const express = require('express');
const http = require('http');
const boddyParser = require('body-parser');
const mporgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = require('./router');

// db config
const db = require('./config/database');

// db setup
mongoose.connect(db.mongoURI, {
    useMongoClient: true,
});

// app setup
app.use(mporgan('dev'));
app.use(cors());
app.use(boddyParser.json({type: '*/*'}));
router(app);

// server app
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: 3090');
