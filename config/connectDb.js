import mongoose from 'mongoose';
import colors from 'colors';

const connectDB=async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://sanketkansal2001:Sanket2300@cluster0.ef0i03k.mongodb.net/yourDatabaseName");
        console.log(`Server Running on ${mongoose.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`${error}`.bgRed.white)
    }
}

export default connectDB;