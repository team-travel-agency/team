import React from 'react';


const Pannier = ({ reservedTrips, removeFromPannier }) => { 
  
  return (
    <div>
      <h1>Your Reserved Trips</h1>
      <p>welcome to you pannier your revervation is for only one person you can add as you want of reservations </p>
      
      {reservedTrips.length > 0 ? (
        reservedTrips.map((trip) => (
          <div key={trip._id}>
            <p>Country: {trip.country}</p>
            <img src={trip.img} alt="Trip" />
            <p>Destination: {trip.destination}</p>
            <p>Price: ${trip.price}</p>
            <p>Date: {trip.trip_date}</p>
            <p>Description: {trip.description}</p>
            <button onClick={() => removeFromPannier(trip._id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No trips reserved.</p>
      )}

const Pannier = ({ selectedTrip }) => {
  if (!selectedTrip) {
    return <p>No trip selected.</p>;
  }

  return (
    <div>
      <h1>Reserved Trip</h1>
      <p>Country: {selectedTrip.country}</p>
      <img src={selectedTrip.img} alt="Trip" />
      <p>Price: ${selectedTrip.price}</p>
      <p>Date: {selectedTrip.trip_date}</p>
      <p>Description: {selectedTrip.description}</p>

    </div>
  );
};

export default Pannier;
