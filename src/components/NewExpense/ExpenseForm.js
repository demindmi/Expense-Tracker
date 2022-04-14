import React, { useState } from "react";
import "./ExpenseForm.css";

// props come from parent component
const ExpenseForm = (props) => {
  // using state, with variable names starting with 'entered' or procedures starting with 'set'
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formAddExpense, setFormAddExpense] = useState(true);

  //handlers to pass the value to variables
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // handler to submit form
  const submitHandler = (event) => {
    //prevent page reload on submit:
    event.preventDefault();
    //this will be passed on submit(we create a variable to hold it):
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); //we get function name from parent, we can executed as the value of onSaveExpenseData is a function that we passed
    // ! we are basically executing function defined in parent component, that we passed as a pointer via onSaveExpenseData property
    // we will have to clear the input  fields on submit, since we use two way binding via 'value' attribute of our inputs fields, we can simply do it this way
    setFormAddExpense(true);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const addNewExpenseHandler = () => {
    setFormAddExpense(false);
  };

  const cancelNewExpenseHandler = () => {
    setFormAddExpense(true);
  };

  if (formAddExpense) {
    return (
      <div>
        <button onClick={addNewExpenseHandler}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={cancelNewExpenseHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
