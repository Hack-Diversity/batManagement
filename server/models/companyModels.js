const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyDatas = new Schema(
  {CompanyName: String},
  {CompanyAddress: String},
  {CompanyEmail: String},
  {CompanyType: String},
  {CompanyAbout: String},
);

module.exports = mongoose.model('companydatas', CompanyDatas);
