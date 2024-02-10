import User from '../models/user.model.mjs'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.mjs';

export const signup = async (req, res, next) => {
    const {userName, email, password } = req.body;
    
    if(!userName || !email || !password || userName === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = await bcryptjs.hashSync(password, 10)

    const newUser = User({
        userName,
        email,
        password: hashedPassword
    })

    try{
      await newUser.save();
      res.json({message : 'Signup successful'})
    }catch(error){
      next(error);
    }
};