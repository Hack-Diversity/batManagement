require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


// Middleware
app.use(express.json());

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {  useNewUrlParser: true,
    useUnifiedTopology: true },
   () => console.log('connected to Mongo DB!')
)

//Import Routes
const postsRoute = require('./routes/posts');
// Route Maker Middleware
app.use('/posts', postsRoute);
// port and how we start listening
app.listen(3000);
