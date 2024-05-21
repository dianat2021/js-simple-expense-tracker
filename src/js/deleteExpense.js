import renderExpenses from "./renderExpenses.js";

const deleteExpense = (expenseList, expense) => {
  const deleteIndex = expenseList.findIndex(
    (element) => element.id === expense.id
  );

  expenseList.splice(deleteIndex, 1);
  localStorage.setItem("expense-array", JSON.stringify(expenseList));
  renderExpenses(expenseList);
};

export default deleteExpense;
