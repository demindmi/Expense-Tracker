import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const FilterChangeHandler = (props) => {
    const filterResults = props.filterResult;
    setFilteredYear(filterResults);
  };

  return (
    <div>
      <Card className="expensesList">
        <ExpensesFilter
          onFilterChange={FilterChangeHandler}
          selectedYear={filteredYear}
        />
        {props.expenses.map((item) => (
          <ExpenseItem key={item.id} expense={item} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
