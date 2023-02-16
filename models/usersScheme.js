const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const userScheme = new Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
});
 
 
// Create a model based on that schema
const User = mongoose.model("User", userScheme);
 
 
// export the model
module.exports = User; 