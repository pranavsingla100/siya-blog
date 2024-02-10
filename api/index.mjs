import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.mjs'
import authRoutes from './routes/auth.route.mjs'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{ //process.env.MONGO is the mongodb link to the database
    console.log('MongoDB Database Connected');
}).catch((error) => {
    console.log('MongoDB Database Connection Error', error);
})
const app =express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes);


