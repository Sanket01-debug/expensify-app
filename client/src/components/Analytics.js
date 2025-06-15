import React from 'react';
import {Progress} from "antd";

const Analytics=({allTransaction})=>{
  // Category
  const categories = ["salary","tip","food","movie","bills","medical","fee","tax","send","recieve"];

  // total Transaction
  const totalTransaction=allTransaction.length;

  // income Transaction
  const totalIncomeTransaction=allTransaction.filter((transaction)=>transaction.type==='income');

  // expense Transaction
  const totalExpenseTransaction=allTransaction.filter((transaction)=>transaction.type==='expense');

  // totalIncome percent 
  const totalIncomePercent=(totalIncomeTransaction.length/totalTransaction)*100;

  // totalExpense percent 
  const totalExpensePercent=(totalExpenseTransaction.length/totalTransaction)*100;

  // total turnover
  const totalTurnOver=allTransaction.reduce((acc,transaction)=>acc+transaction.amount,0);

  // totalIncome Turnover
  const totalIncomeTurnOver=allTransaction.filter((transaction)=>transaction.type==='income').reduce((acc,transaction)=>acc+transaction.amount,0);

  // totalExpense Turnover
  const totalExpenseTurnOver=allTransaction.filter((transaction)=>transaction.type==='expense').reduce((acc,transaction)=>acc+transaction.amount,0);

  // totalIncomeTurnOver percent
  const totalIncomeTurnOverPercent=(totalIncomeTurnOver/totalTurnOver)*100;

  // totalExpenseTurnOver percent
  const totalExpenseTurnOverPercent=(totalExpenseTurnOver/totalTurnOver)*100;

  return(
    <>
      <div className='row m-3'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              Total Transaction: {totalTransaction}
            </div>

            <div className='card-body'>
              <h5 className='text-success'>Income: {totalIncomeTransaction.length}</h5>
              <h5 className='text-danger'>Expense: {totalExpenseTransaction.length}</h5>

              <div className="d-flex flex-column align-items-center">

                {/* progress type- totalIncomePercent */}
                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomePercent.toFixed(0)}/>

                {/* progress type- totalExpensePercent */}
                <Progress type='circle' strokeColor={'red'} className='mx-2 mt-3' percent={totalExpensePercent.toFixed(0)}/>
              </div>

            </div>
          </div>
        </div>


        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              Total TurnOver: {totalTurnOver}
            </div>

            <div className='card-body'>
              <h5 className='text-success'>Income: {totalIncomeTurnOver}</h5>
              <h5 className='text-danger'>Expense: {totalExpenseTurnOver}</h5>

              <div>
                {/* progress type- totalIncomePercent */}
                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomeTurnOverPercent.toFixed(0)}/>

                {/* progress type- totalExpensePercent */}
                <Progress type='circle' strokeColor={'red'} className='mx-2 mt-3' percent={totalExpenseTurnOverPercent.toFixed(0)}/>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Category Wise income */}
      <div className='row md-3'>
        <div>
          <h4 className='"bg-dark p-2 text-light"'>Category Wise Income</h4>
          {
            categories.map((category)=>{
              const amount=allTransaction.filter((transaction)=>transaction.type==='income'&&transaction.category===category).reduce((acc,transaction)=>acc+transaction.amount,0);

              return amount>0&&(
                <div className='card mt-2'>
                  <div className='card-body'>
                    <h5>{category}</h5>
                    <Progress percent={((amount/totalIncomeTurnOver)*100).toFixed(0)} />
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* category wise expense */}
        <div className='col-md-4'>
          <h4 className='bg-warning p-2 text-light'>Category Wise Expense</h4>
          {
            categories.map((category)=>{
              const amount=allTransaction.filter((transaction)=>transaction.type==='expense'&&transaction.category===category).reduce((acc,transaction)=>acc+transaction.amount,0);
              return amount>0&&(
                <div className='card mt-2'>
                  <div className='card-body'>
                    <h5>{category}</h5>
                    <Progress percent={((amount/totalExpenseTurnOver)*100).toFixed(0)} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Analytics;