import deleteExpense from "./deleteExpense.js";

const displayExpensesContainer = document.querySelector(
  ".display-expenses-container"
);
const expenseListcontainer = document.querySelector(".expense-list");

const renderExpenses = (expenseList) => {
  expenseListcontainer.textContent = "";
  expenseList.forEach((expense, index) => {
    // CREATING THE ELEMENTS
    const individualExpenseContainer = document.createElement("div");
    const expenseNumber = document.createElement("span");
    const expenseTitle = document.createElement("span");
    const expenseAmount = document.createElement("span");
    const expenseDate = document.createElement("span");
    const deleteBtnContainer = document.createElement("span");
    const deleteButton = document.createElement("button");

    // APPENDING THE ELEMENTS
    displayExpensesContainer.append(expenseListcontainer);
    expenseListcontainer.append(individualExpenseContainer);
    individualExpenseContainer.append(
      expenseNumber,
      expenseTitle,
      expenseAmount,
      expenseDate,
      deleteBtnContainer
    );
    deleteBtnContainer.append(deleteButton);

    // SERTTING THE CONTENT OF ELEMETS
    expenseNumber.textContent = index + 1;
    expenseTitle.textContent = expense.expenseTitle;
    expenseAmount.textContent = expense.expenseAmount;
    expenseDate.textContent = expense.expenseDate;
    deleteButton.textContent = "Delete";

    //ADDING CLASSES TO THE ELEMENTS
    expenseListcontainer.classList.add("expense-list-container");
    individualExpenseContainer.classList.add("individual-expense-container");
    expenseNumber.classList.add("expense-number");
    expenseTitle.classList.add("expense-title");
    expenseAmount.classList.add("expense-amount");
    expenseDate.classList.add("expense-date");
    deleteBtnContainer.classList.add("delete-button-container");
    deleteButton.classList.add("delete-button");

    // DELETE EXPENSES
    deleteButton.addEventListener("click", () => {
      deleteExpense(expenseList, expense);
    });
  });
};

export default renderExpenses;
