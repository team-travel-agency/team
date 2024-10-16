const User= require ('./model/index.js');
const express =require('express') ;
const mongoose =require('mongoose') ;
const router1 =require("./routes/loginrouter.js")
const signupRouter =require("./routes/signuprouter.js")
const router2 =require("./routes/triprouter.js")



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/travel-agency')
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


  app.use('/api/sigup', signupRouter)
  app.use('/api/login', router1)
  app.use('/api/trips', router2)
  


 




const PORT =  5173;
app.listen(PORT, (err) => {
  if(err)console.log(err);
  
  console.log(`Server is running on port ${PORT}`);
})
