import React from 'react';

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
