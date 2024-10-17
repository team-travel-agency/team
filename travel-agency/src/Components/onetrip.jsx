import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";  


const OneTrip = ({addToPannier}) => { 
 
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getTrip/${id}`
        );
        setTrip(response.data);
      } catch (error) {
        console.log("Error fetching trip:", error);
      }
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h1>Trip Details</h1>
      <p>Country: {trip.country}</p>
      <img src={trip.img} alt="Trip" />
      <p>destination: {trip.destination}</p>
      <p>Price: ${trip.price}</p>
      <p>Date: {trip.trip_date}</p>
      <p>Description: {trip.description}</p>
      
      <Link to="/Pannier">
      <button onClick={() => addToPannier(trip)}>Reserve</button>
      </Link>
    
    </div>
  );
};


export default OneTrip;
