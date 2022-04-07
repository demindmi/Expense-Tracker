import ExpenseList from "./components/Expenses/ExpenseList";

const App = () => {
  const expenses = [
    { key: 1, title: "Tools", amount: 322.55, date: new Date(2022, 1, 21) },
    { key: 2, title: "Stuff", amount: 100.0, date: new Date(2022, 3, 22) },
    { key: 3, title: "Rockets", amount: 499.99, date: new Date(2022, 2, 1) },
    { key: 4, title: "Bananas", amount: 2.35, date: new Date(2022, 3, 5) },
  ];

  return (
    <div>
      <h2> Hello </h2>
      <ExpenseList expenses={expenses} />;
    </div>
  );
};

export default App;
