const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CompanyDatas = require("../models/companyModels");

router.route('/').get(async (req, res) =>{
   await CompanyDatas
    .find({}, (error, data)=> {
      console.log(data);
      return res.send(data).json();
    })
  });

router.route('/add').post((req, res, next) =>{
  CompanyDatas.create({
    CompanyName: req.body.CompanyName,
    CompanyAddress: req.body.CompanyAddress,
    EmailAddress: req.body.EmailAddress,
    CompanyType: req.body.CompanyType,
    CompanyAbout: req.body.CompanyAbout
  })
  .then(response => json(response))
  })
;

module.exports = router;
