const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {CompanyName: String,
  CompanyAddress: String,
  CompanyEmail: String,
  CompanyType: String,
  CompanyAbout: String,
},
  {timestaps:true}
);

module.exports= mongoose.model('companydatas', CompanySchema);
