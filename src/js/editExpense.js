import storeExpenses from "./storeExpenses.js";
import renderExpenses from "./renderExpenses.js";

const editExpense = (expenseList, expense, editButton) => {
  expense.isEditing = !expense.isEditing;
  editButton.textContent = expense.isEditing ? "Confirm" : "Edit";
  const titleInput = document.querySelector(".expense-title-input");
  const amountInput = document.querySelector(".expense-amount-input");
  const dateInput = document.querySelector(".expense-date-input");
  const submitButton = document.querySelector(".submit-button");

  if (expense.isEditing) {
    // POPULATING THE INPUT ELEMENTS WITH THE EXPENSE DETAILS THAT HAS BEEN CLICKED ON
    titleInput.value = expense.expenseTitle;
    amountInput.value = expense.expenseAmount;
    dateInput.value = expense.expenseDate;
    // CHANGING THE BACKGROUND COLOR OF INPUTS
    titleInput.style.backgroundColor = "yellow";
    amountInput.style.backgroundColor = "yellow";
    dateInput.style.backgroundColor = "yellow";
    //DEACTIVATING THE SUBMIT BUTTON
    submitButton.setAttribute("disabled", "true");
  } else {
    const clonedExpenseList = [...expenseList];

    const editIndex = clonedExpenseList.findIndex(
      (element) => element.id === expense.id
    );

    clonedExpenseList.splice(editIndex, 1, {
      id: expense.id,
      expenseTitle: titleInput.value.trim(),
      expenseAmount: amountInput.value.trim(),
      expenseDate: dateInput.value.trim(),
      isEditing: expense.isEditing,
    });
    storeExpenses(clonedExpenseList);
    renderExpenses(clonedExpenseList);
    // ACTIVATING THE SUBMIT BUTTON
    submitButton.removeAttribute("disabled");
    titleInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
  }
  console.log(expense.isEditing);
};

export default editExpense;
