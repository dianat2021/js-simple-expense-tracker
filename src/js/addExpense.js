const addExpense = (expenseList, title, amount, date) => {
  const newExpense = {
    id: Date.now(),
    expenseTitle: title.value.trim(),
    expenseAmount: amount.value.trim(),
    expenseDate: date.value.trim(),
  };
  expenseList.push(newExpense);
};

export default addExpense;
