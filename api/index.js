import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import AuthRouter from './routes/authRoutes.js';
import PostRouter from './routes/postRoutes.js';
import UserRouter from './routes/userRoutes.js';


dotenv.config();


const app=express();


app.use(express.json());
app.use(cors());


app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/posts', PostRouter);
app.use('/api/v1/users', UserRouter);


mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("mongoDB connected")).catch(err=>console.log(err));

app.listen(8800, ()=>{
	console.log("server running on port 8800");
});
