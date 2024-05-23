import renderExpenses from "./renderExpenses.js";
import storeExpenses from "./storeExpenses.js";
import calculateTotal from "./calculateTotal.js";
const deleteExpense = (expenseList, expense) => {
  const deleteIndex = expenseList.findIndex(
    (element) => element.id === expense.id
  );

  expenseList.splice(deleteIndex, 1);
  storeExpenses("expense-array", expenseList);
  storeExpenses("total-expenses", calculateTotal(expenseList));
  renderExpenses(expenseList);
  totalExpenses.textContent = localStorage.getItem("total-expenses");
};

export default deleteExpense;
