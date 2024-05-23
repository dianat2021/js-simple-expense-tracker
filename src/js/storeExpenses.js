const storeExpenses = (name, expenseList) => {
  localStorage.setItem(name, JSON.stringify(expenseList));
};

export default storeExpenses;
