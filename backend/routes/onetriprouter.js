const express = require("express");

const getTripById = require("../controllers/onetrip.js");

const getTripByIdRouter = express.Router();
getTripByIdRouter.get("/getTrip/:id", getTripById);

module.exports = getTripByIdRouter;
