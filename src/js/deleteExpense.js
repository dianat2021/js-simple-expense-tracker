import renderExpenses from "./renderExpenses.js";
import storeExpenses from "./storeExpenses.js";
import calculateTotal from "./calculateTotal.js";
import editExpense from "./editExpense.js";

const deleteExpense = (expenseList, expense) => {
  const totalExpenses = document.querySelector(".total-expenses");

  const deleteIndex = expenseList.findIndex(
    (element) => element.id === expense.id
  );
  
  // EXIT EDIT-MODE IF EXPENSE IS DELETED
  if(expense.isEditing) {
    expense.isEditing = false;
    // SELECTING THE DOM ELEMENTS
    const titleInput = document.querySelector(".expense-title-input");
    const amountInput = document.querySelector(".expense-amount-input");
    const dateInput = document.querySelector(".expense-date-input");
    const submitButton = document.querySelector(".submit-button");

    // CHANGING THE BACKGROUND COLOR OF INPUTS
    titleInput.style.backgroundColor = "white";
    amountInput.style.backgroundColor = "white";
    dateInput.style.backgroundColor = "white";

    // ACTIVATING THE SUBMIT BUTTON
    submitButton.removeAttribute("disabled");
    
    // EMPTYING THE INPUTS
    titleInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
  }

  expenseList.splice(deleteIndex, 1);  
  storeExpenses("expense-array", expenseList);
  storeExpenses("total-expenses", calculateTotal(expenseList));
  renderExpenses(expenseList);
  totalExpenses.textContent = localStorage.getItem("total-expenses");
};

export default deleteExpense;
