/*
Configuration File->
Security Middleware & Corresponding Route's Configuration will be Managed in this App.js File 
*/

const express = require("express");

const router = require("./src/routes/api");

const app = new express();

// Configuring Security Middlewares

// Import

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize= require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp= require("hpp");
const cors = require("cors");

// Implementing Security Middlewares & immediately invoking these Functions

app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(mongoSanitize());
app.use(hpp());


// Implementing Rate-Limiting Per Request 

const limiter = rateLimit({
    windowMs: 15*60*1000, // 15 Minutues;
    max: 100 // Limiting Each IP 100 requests per WindowMs
})

app.use(limiter)

// Versioning URL (will be placed before Router's End-Point)

app.use("/api/v1", router);


// For any Undefined Route

app.use("*",(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
})

// Exporting app to use In Other Files;
module.exports=app;