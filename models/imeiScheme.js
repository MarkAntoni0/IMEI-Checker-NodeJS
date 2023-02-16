const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const imeiScheme = new Schema({
  imei: String,
});
 
 
// Create a model based on that schema
const Imei = mongoose.model("Imei", imeiScheme);
 
 
// export the model
module.exports = Imei; 