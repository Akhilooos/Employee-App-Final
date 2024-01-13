const express = require("express");
const morgan = require('morgan');
const route = require('./routes/routes');
const loginroute = require('./routes/loginroutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

const app = new express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//Routes
app.use('/emp', route);
app.use('/user', loginroute);

//Serving the frontend
app.use(express.static(path.join(__dirname, "./employeeappfront/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./employeeappfront/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
