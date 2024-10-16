const express =require('express') ;
const  getTrips = require ('../controllers/trips.js');

const tripRouter = express.Router();

tripRouter.get('/getTrips', getTrips);

module.exports=tripRouter
