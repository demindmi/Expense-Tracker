import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { title: "Tools", amount: 322.55, date: new Date(2022, 1, 21) },
    { title: "Stuff", amount: 100.0, date: new Date(2022, 3, 22) },
    { title: "Rockets", amount: 499.99, date: new Date(2022, 2, 1) },
    { title: "Bananas", amount: 2.35, date: new Date(2022, 3, 5) },
  ];

  return (
    <div className="App">
      <h2> Hello </h2>
      <ExpenseList expenses={expenses} />;
    </div>
  );
}

export default App;
