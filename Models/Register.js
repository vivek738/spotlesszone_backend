const mongoose = require("mongoose");


//creating register schema 
const regSchema = mongoose.Schema;

const registerSchema = new regSchema({
  name: {
    type: String,
  },
  email: {
      type: String,
  },
  password: {
      type: String,
  },
});

module.exports = mongoose.model("Register", registerSchema);
