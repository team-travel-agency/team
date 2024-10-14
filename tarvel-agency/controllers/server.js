import express from 'express';
import mongoose from 'mongoose';
import User from '../models/singup/singup.js'

const app = express();

app.use(express.json());

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:5500/travel-agency',)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });

// Example route
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(400).send('Error creating user: ' + error.message);
    }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
