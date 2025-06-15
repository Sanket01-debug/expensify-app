import express from 'express';
import {addTransaction,deleteTransaction,editTransaction,getAllTransaction} from '../controllers/transactionController.js';

// router object
const router=express.Router();

// routers
// add transaction
router.post("/add-transaction",addTransaction);

// edit transaction
router.post("/edit-transaction", editTransaction);

// delete transaction
router.post("/delete-transaction",deleteTransaction);

// get transaction
router.post("/get-transaction", getAllTransaction);

export default router;