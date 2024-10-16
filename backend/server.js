
const express =require('express') ;
const cors=require('cors')
const mongoose =require('mongoose') ;
const loginRouter =require("./routes/loginrouter.js")
const signupRouter =require("./routes/signuprouter.js")
const tripRouter =require("./routes/triprouter.js")
const getTripByIdRouter=require("./routes/onetriprouter.js")




const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017/travel-agency')
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


  app.use('/api', signupRouter)
  app.use('/api', loginRouter)

  app.use('/api', router2)

  app.use('/api', tripRouter)
  app.use('/api',getTripByIdRouter)
  


 




const PORT =  5000;
app.listen(PORT, (err) => {
  if(err)console.log(err);
  
  console.log(`Server is running on port ${PORT}`);
})
