import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 1, title: "Tools", amount: 322.55, date: new Date(2022, 1, 21) },
  { id: 2, title: "Mango", amount: 100.0, date: new Date(2021, 3, 22) },
  { id: 3, title: "Rockets", amount: 499.99, date: new Date(2022, 2, 1) },
  { id: 4, title: "Bananas", amount: 2.35, date: new Date(2020, 3, 5) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    // !setExpenses([expense, ...expenses]); //add new item as the 1st item of dummy array, this is however incorrect way.
    setExpenses((prevExpenses) => {
      //this is a build in function that automatically receives the latest STATE snapshot
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />;
    </div>
  );
};

export default App;
