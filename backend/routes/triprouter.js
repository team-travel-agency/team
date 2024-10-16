const express = require ('express') ;
const  getTrips = require ('../controllers/trips.js');

const router2 = express.Router();

router2.get('/getTrips', getTrips);

module.exports=router2
