const mongoose= require('mongoose') 


const TripSchema = new mongoose.Schema({
    img: String,
    destination: String,
    price: Number,
    duration: Number,
    trip_date: String,
    country: String,
    description: String
  });


  const Trip = mongoose.model("Trip", TripSchema);
  module.exports =Trip 