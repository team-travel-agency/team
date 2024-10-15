// import User from './model/up.js';
const express =require('express') ;
const mongoose =require('mongoose') ;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/travel-agency')
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });






const PORT =  5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})