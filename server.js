import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan'; // to get status of incoming request to know which url hits the server
import connectDB from './config/connectDb.js';
import userRoute from './routes/userRoute.js';
import transactionRoute from './routes/transactionRoute.js';

// config dotenv file
dotenv.config();

// database call
connectDB();

// create rest object
const app=express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/user',userRoute);
app.use('/api/v1/transaction',transactionRoute);

// PORT
const PORT=process.env.PORT||8080;

// listen the port
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} on ${PORT}`.bgBlue.white);
});