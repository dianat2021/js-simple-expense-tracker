const storeExpenses = (expenseList) => {
  localStorage.setItem("expense-array", JSON.stringify(expenseList));
};

export default storeExpenses;
