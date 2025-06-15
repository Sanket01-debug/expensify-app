import transactionModel from '../models/transactionModel.js';
import moment from 'moment';

// get all transactions
export const getAllTransaction=async(req,res)=>{
    try{
        const {frequency,selectedDate,type}=req.body;
        const transactions=await transactionModel.find({
            // custom dates
            ...(frequency!=='custom'
            ?
            {
                date:
                {$gt:moment().subtract(Number(frequency),'d').toDate()},
            }
            :
            {
                date:
                {$gte:selectedDate[0],$lte:selectedDate[1]},
            }),

            userid:req.body.userid,

            // about income or expense or both
            ...(type!=='all'&&{type})
        });
        res.status(200).json(transactions);
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while fetching Transaction',
            error,
        });
    }
}

// delete transaction
export const deleteTransaction=async(req,res)=>{
    try{
        await transactionModel.findOneAndDelete({_id:req.body.transactionId});
        res.status(200).send({
            success:true,
            message:'Transaction deleted Successfully'
        })
    }catch(error){
        res.status(500).josn({
            success:false,
            message:'Error while Deleting Transaction',
            error
        })
    }
}

// edit transaction
export const editTransaction=async(req,res)=>{
    try{
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).send({
            success:true,
            message:'Transaction edit Successfully'
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Error while edit Transaction',
            error,
        })
    }
}

// add transaction
export const addTransaction=async(req,res)=>{
    try{
        const newTransaction=new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send({
            success:true,
            message:'Transaction Created Successfully',
            newTransaction,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Error while creating Transaction',
            error,
        })
    }
}