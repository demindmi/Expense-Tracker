import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const FilterChangeHandler = (props) => {
    setFilteredYear(props);
  };

  return (
    <div>
      <Card className="expensesList">
        <ExpensesFilter
          onFilterChange={FilterChangeHandler}
          selectedYear={filteredYear}
        />
        {/* {props.expenses.map((item) => (
          <ExpenseItem key={item.id} expense={item} />
        ))} */}
        {props.expenses
          .filter((item) => item.date.getFullYear().toString() == filteredYear)
          .map((item) => (
            <ExpenseItem key={item.id} expense={item} />
          ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
