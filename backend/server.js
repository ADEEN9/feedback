const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());                      
app.use('/api',authRoutes);
app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb Connected");
    app.listen(process.env.PORT,()=>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
})
.catch(err=>console.error("MongoDB connection error:",err));