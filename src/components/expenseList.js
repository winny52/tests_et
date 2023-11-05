import Expense from "./expense";
import { useState, useEffect } from "react";
import Chart from "./chart";

function Expenses({ user,expenses,setExpenses }) {
  const [transportSum, setTransportSum] = useState(0);
  const [foodSum, setFoodSum] = useState(0);
  const [billSum, setBillSum] = useState(0);
  const [shoppingSum, setShoppingSum] = useState(0);
  const [entertainmentSum, setEntertainmentSum] = useState(0);

  useEffect(() => {
    fetch(`https://expense-tracker-7yjh.onrender.com//${user}/expenses`)
      .then((resp) => resp.json())
      .then((data) => {
        setExpenses(data);

        // Calculate the sum of expenses for each category within the current week
        const currentDate = new Date();
        const currentWeekStart = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - currentDate.getDay()
        ); // Start of the current week

        const transportExpenses = data.filter(
          (expense) =>
            expense.category === "Transportation" &&
            new Date(expense.date) >= currentWeekStart
            
        );
        const sumTransport = transportExpenses.reduce((accumulator, currentValue) => {
          return accumulator + parseFloat(currentValue.amount);
        }, 0).toFixed(2); // Round to 2 decimal places

        const foodExpenses = data.filter(
          (expense) =>
            expense.category === "Food" && new Date(expense.date) >= currentWeekStart
        );
        const sumFood = foodExpenses.reduce((accumulator, currentValue) => {
          return accumulator + parseFloat(currentValue.amount);
        }, 0).toFixed(2); // Round to 2 decimal places

        const billExpenses = data.filter(
          (expense) =>
            expense.category === "Bill" && new Date(expense.date) >= currentWeekStart
        );
        const sumBill = billExpenses.reduce((accumulator, currentValue) => {
          return accumulator + parseFloat(currentValue.amount);
        }, 0).toFixed(2); // Round to 2 decimal places

        const shoppingExpenses = data.filter(
          (expense) =>
            expense.category === "Shopping" &&
            new Date(expense.date) >= currentWeekStart
        );
        const sumShopping = shoppingExpenses.reduce((accumulator, currentValue) => {
          return accumulator + parseFloat(currentValue.amount);
        }, 0).toFixed(2); // Round to 2 decimal places

        const entertainmentExpenses = data.filter(
          (expense) =>
            expense.category === "Entertainment" &&
            new Date(expense.date) >= currentWeekStart
        );
        const sumEntertainment = entertainmentExpenses.reduce(
          (accumulator, currentValue) => {
            return accumulator + parseFloat(currentValue.amount);
          },
          0
        ).toFixed(2); // Round to 2 decimal places

        setTransportSum(sumTransport);
        setFoodSum(sumFood);
        setBillSum(sumBill);
        setShoppingSum(sumShopping);
        setEntertainmentSum(sumEntertainment);
      });
      
  }, [user,setExpenses]);

  return (
    <div className="flex justify-between">
      <Chart
        entertain={entertainmentSum}
        transport={transportSum}
        food={foodSum}
        shopping={shoppingSum}
        bill={billSum}
      />
      <div className="ml-32 h-3/4 overflow-y-scroll">
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
