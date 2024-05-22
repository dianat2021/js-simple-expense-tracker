import storeExpenses from "./storeExpenses.js";
import renderExpenses from "./renderExpenses.js";

const editExpense = (
  expenseList,
  expense,
  editButton,
  individualExpenseContainer
) => {
  expense.isEditing = !expense.isEditing;
  editButton.textContent = expense.isEditing ? "Confirm" : "Edit";
  const titleInput = document.querySelector(".expense-title-input");
  const amountInput = document.querySelector(".expense-amount-input");
  const dateInput = document.querySelector(".expense-date-input");
  const submitButton = document.querySelector(".submit-button");

  // CHANGING THE BACKGROUND COLOR OF INPUTS
  titleInput.style.backgroundColor = expense.isEditing ? "#FFFDD0" : "white";
  amountInput.style.backgroundColor = expense.isEditing ? "#FFFDD0" : "white";
  dateInput.style.backgroundColor = expense.isEditing ? "#FFFDD0" : "white";

  if (expense.isEditing) {
    // POPULATING THE INPUT ELEMENTS WITH THE EXPENSE DETAILS THAT HAS BEEN CLICKED ON
    titleInput.value = expense.expenseTitle;
    amountInput.value = expense.expenseAmount;
    dateInput.value = expense.expenseDate;

    individualExpenseContainer.style.backgroundColor = "#FFFDD0";
    editButton.style.backgroundColor = "#018749";
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
    individualExpenseContainer.style.backgroundColor = "#e0ffff";
    editButton.style.backgroundColor = "#0077c0";
  }
  console.log(expense.isEditing);
};

export default editExpense;
