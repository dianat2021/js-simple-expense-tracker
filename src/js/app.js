import addExpense from "./addExpense.js";
import calculateTotal from "./calculateTotal.js";
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
const totalExpenses = document.querySelector(".total-expenses");
// EXPENSE LIST ARRAY
const expenseList = JSON.parse(localStorage.getItem("expense-array")) || [];

// RENDERING EXPENSES FROM THE LOCAL STORAGE ON DOMCONTENTLOAD
document.addEventListener("DOMContentLoaded", () => {
  renderExpenses(expenseList);
  totalExpenses.textContent = localStorage.getItem("total-expenses");
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
    const total = calculateTotal(expenseList);
    storeExpenses("expense-array", expenseList);
    renderExpenses(expenseList);
    storeExpenses("total-expenses", total);
    totalExpenses.textContent = total;

    titleInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
  }
  return;
});

// console.log(calculateTotal([1, 2, 3]));
