require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const postRouter = require('./routes/posts');
const companyRouter = require('./routes/companyRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose
  .connect(uri, { useNewUrlParser:true, useUnifiedTopology:true})
  .catch((error) => console.error(error.message));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB successfully established");
})

app.use('/', companyRouter);
app.use('/posts', postRouter);


app.listen(port, ()=>{
  console.log(`<<< Server is running on port: ${port} >>>`);
})
