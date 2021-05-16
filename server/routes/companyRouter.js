const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CompanyDatas = require("../models/companyModels");

router.route('/').get(async (req, res) =>{
   await CompanyDatas
    .find({}, (error, data)=> {
      console.log(data);
      res.send(data).json();
    })
  });

router.route('/').post((req, res) =>{
  const CompanyName = req.body.CompanyName;
  const CompanyAddress = req.body.CompanyAddress;
  const CompanyEmail = req.body.CompanyEmail;
  const CompanyType = req.body.CompanyType;
  const CompanyAbout = req.body.CompanyAbout;

  const newCompany = new CompanyDatas({
    CompanyName,
    CompanyAddress,
    CompanyEmail,
    CompanyType,
    CompanyAbout
  });

  newCompany
    .save()
    .then( data => res.status(200).json(data))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;
