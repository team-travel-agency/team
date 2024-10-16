// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();

// app.use(express.json());

// // Connect to MongoDB 
// mongoose.connect('mongodb://localhost:27017/travel-agency')
//     .then(() => {
//         console.log("Connected to MongoDB successfully!");
//     })
//     .catch((err) => {
//         console.error("Failed to connect to MongoDB:", err);
//     });

// // Define the schema
// const UserSchema = new mongoose.Schema({
//     img: String,
//     destination: String,
//     price: Number,
//     duration: Number,
//     trip_date: String,
//     country: String,
//     description: String
// });

// // Create the model
// const UserModel = mongoose.model("trips", UserSchema);

// // Define the route to get trips
// app.get("/getTrips", (req, res) => {
//     UserModel.find({})
//         .then(function (trips) {
//             res.json(trips);
//         })
//         .catch(function (err) {
//             console.log(err);
//             res.status(500).json({ error: "Failed to retrieve trips" });
//         });
// });

// // Start the server
// app.listen(5173, () => {
//     console.log("Server is running on port 5500");
// });
