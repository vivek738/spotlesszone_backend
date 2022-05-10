// // for importing mongoose for database

const mongoose = require("mongoose");



// connecting to database

mongoose

  .connect("mongodb://127.0.0.1:27017/spotlesszone_database", {

    useNewUrlParser: true,



    useUnifiedTopology: true,

  })

  .then(() => console.log("Database is connecting..."))

  .catch((err) => console.log(err));