const express = require("express");
const dotenv = require("dotenv");

const colors = require("colors");

const cors = require('cors')

const bodyParser = require('body-parser')
const app = express();
//connect db

dotenv.config();

// to receive body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// for making connection with front-end
app.use(cors())

// import databse

require("./Database/db");

// for making images storing directory public
app.use(express.static(__dirname + "/Stores"));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.status(200).json({});
  }
  next();
});

// for server : port and host

const port = process.env.PORT || 8080;

const host = process.env.HOST_NAME;

app.listen(port, host, () => {
  console.log(`Server is listening at ${host}:${port}`.rainbow.bold);
});