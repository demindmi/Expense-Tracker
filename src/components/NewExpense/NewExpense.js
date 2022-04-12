import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // we will get parameters for this function from child components passed via onSaveExpenseData handler
    const expenseData = {
      //
      //we pass the arguments to this object where we pull out the
      // key value pairs from EnteredData and add ID key
      ...enteredExpenseData,
      id: Math.random().toString(), // its just for this demo
    };
    props.onAddExpense(expenseData); //this will pass this to the parent
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* //function here is not executed because we only pass a pointer too it //
      no we can use this function in child components, it will be passed to expnse form as a prop */}
    </div>
  );
};

export default NewExpense;
