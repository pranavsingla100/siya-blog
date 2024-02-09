import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB Database Connected');
}).catch((error) => {
    console.log('MongoDB Database Connection Error', error);
})
const app =express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

