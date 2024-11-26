const express=require("express");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const app=express();


const PORT=3008;


//db
connectDB();


// user routes
const userRoutes = require("./routes/userRoutes");
// service routes
const servicesRoutes=require("./routes/serviceProviderRouter");

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
});


app.use("/api/v1/user",userRoutes);
app.use("/api/v1/services",servicesRoutes)
