import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const expenseItems = props.expenses.map((item) => (
    <ExpenseItem key={item.key} expense={item} />
  ));

  return <Card className="expensesList">{expenseItems}</Card>;
};

export default ExpenseList;
