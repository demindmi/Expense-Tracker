import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title); // returns an array,
  //1st element is the variable itself, 2nd one - updating function

  const clickHandler = () => {};

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
