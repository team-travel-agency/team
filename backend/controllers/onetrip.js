const Trip = require('../model/trips.js');

const getTripById = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findById(id);
    console.log(trip);
    
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }
    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve trip" });
  }
};

module.exports = getTripById;
