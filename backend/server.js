import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
dotenv.config();
const port = 5000;
const app = express();
app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    connectDB();
    console.log(`Server running at port: ${port}`)
});