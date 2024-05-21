import addExpense from "./addExpense.js";
import validateForm from "./formValidation.js";
import renderExpenses from "./renderExpenses.js";
import storeExpenses from "./storeExpenses.js";

// SELECTING THE DOM ELEMENTS
const titleInput = document.querySelector(".expense-title-input");
const amountInput = document.querySelector(".expense-amount-input");
const dateInput = document.querySelector(".expense-date-input");

const addExpenseForm = document.querySelector(".add-expenses-form");
const titleError = document.querySelector(".title-error");
const amountError = document.querySelector(".amount-error");
const dateError = document.querySelector(".date-error");
// EXPENSE LIST ARRAY
const expenseList = JSON.parse(localStorage.getItem("expense-array")) || [];

// RENDERING EXPENSES FROM THE LOCAL STORAGE ON DOMCONTENTLOAD
document.addEventListener("DOMContentLoaded", () => {
  renderExpenses(expenseList);
});
// ADDING EVENT LISTENERS
addExpenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formIsValid = validateForm(
    titleInput,
    amountInput,
    dateInput,
    titleError,
    amountError,
    dateError
  );
  if (formIsValid) {
    addExpense(expenseList, titleInput, amountInput, dateInput);
    storeExpenses(expenseList);
    renderExpenses(expenseList);
    console.log(expenseList);
    titleInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    console.log(expenseList);
  }
  return;
});
