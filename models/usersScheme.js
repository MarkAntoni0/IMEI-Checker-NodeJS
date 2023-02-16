const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// define the Schema (the structure of the article)
const userScheme = new Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
});
 
//passport for login
userScheme.plugin(passportLocalMongoose);

// Create a model based on that schema
const User = mongoose.model("User", userScheme);
 
 
// export the model
module.exports = User; 