const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');


// define the Schema (the structure of the article)
const imeiScheme = new Schema({
  imei: Number,
});
 
 
// Create a model based on that schema
const Imei = mongoose.model("Imei", imeiScheme);


 
// export the model
module.exports = Imei; 