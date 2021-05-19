const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const posts = require('./routes/posts');
const companyRouter = require('./routes/companyRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose
  .connect(uri, { useNewUrlParser:true, useUnifiedTopology:true})
  .catch((error) => console.error(error));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB successfully established");
})

app.use('/', companyRouter);
app.use('/posts', posts);

app.listen(port, ()=>{
  console.log(`<<< Server is running on port: ${port} >>>`);
})
