const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyDatas = new Schema(
  {CompanyName: String},
  {CompanyAddress: String},
  {CompanyEmail: String},
  {CompanyType: String},
  {CompanyAbout: String},
);

// CompanySchema.virtual("url").get(function(){
//   return '/company' + this._id
// });

module.exports = mongoose.model('companydatas', CompanyDatas);
