const express = require('express');
const bodyParser = require('body-parser'); 
const routes = require('./routes')(); 
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, authorization");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());

app.use('/', routes);

app.use(async (error, req, res, next) => {
  console.error(`${req.method} ${req.url} ${error.message} ${error.stack}`);

  try {
    await console.error(`Error:\n*${req.method} ${req.url} \n*Stack Trace: * ${error.message} ${error.stack}`);
  } catch (error) {
    console.error(error);
  }

  try {
    return res.send({ errors: [{ message: error.message }] });
  } catch (error) {
    return next(error);
  }
});

module.exports = app;
