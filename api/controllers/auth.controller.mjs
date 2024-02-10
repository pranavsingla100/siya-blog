import User from '../models/user.model.mjs'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    const {userName, email, password } = req.body;
    
    if(!userName || !email || !password || userName === '' || email === '' || password === ''){
        return res.status(400).json({message : 'All fields are required'})
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
    }catch(err){
      res.status(400).json({message : err.message})
    }
};