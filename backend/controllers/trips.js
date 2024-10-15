const Trip =require ('../model/index.js');

 const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.json(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve trips" });
    }
};
module.exports=getTrips
