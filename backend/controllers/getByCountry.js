const Trip = require("../model/trips.js");
const getTripByCountry = async (req, res) => {
    const { country } = req.query;

    try {
        const trip = await Trip.find({ country });
        console.log(trip);

        if (trip.length === 0) {
            return res.status(404).json({ error: "Trip not found" });
        }
        res.json(trip);
    } catch (err) {
        console.error("Error retrieving trip:", err);
        res.status(500).json({ error: "Failed to retrieve trip" });
    }
};
module.exports= getTripByCountry
