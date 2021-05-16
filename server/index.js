require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const companyRouter = require('./routes/companyRouter');
const connectionString = "https://localhost:5000";//placeholder connectionstring

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose
  .connect(connectionString, { useNewUrlParser:true, useUnifiedTopology:true})
  .catch((error) => console.error(error));

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB successfully established");
})

app.use('/', companyRouter);

app.listen(port, ()=>{
  console.log(`<<< Server is running on port: ${port} >>>`);
})
