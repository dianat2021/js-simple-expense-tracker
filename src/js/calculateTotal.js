const calculateTotal = (expenseList) => {
  return expenseList.reduce((acc, current) => {
    return (acc += Number(current.expenseAmount));
  }, 0);
};

export default calculateTotal;
