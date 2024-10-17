const express = require("express");
const getTripByCountry = require("../controllers/getByCountry.js");

const getCountryRouter = express.Router();
getCountryRouter.get("/getcountry", getTripByCountry); 

module.exports = getCountryRouter;
