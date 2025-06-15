import userModel from '../models/userModel.js';

// register
export const registerController=async(req,res)=>{
    try{
        const newUser=new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success:true,
            message:'User registered successfully',
            newUser,
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'Error while registering',
            error,
        });
    }
}

// login
export const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email,password});

        // if user not found
        if(!user){
            return res.status(404).send('User not found');
        }

        // if user found
        res.status(200).json({
            success:true,
            message:'User login Successfully',
            user,
        });

    }catch(error){
        res.status(400).send({
            success:false,
            message:'Error while login',
            error,
        });
    }
}