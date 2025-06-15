import mongoose from 'mongoose';

// design schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'E-mail should be Required and should be unique'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    }
},{timestamps:true});

// export
const userModel=mongoose.model('users',userSchema);
export default userModel;