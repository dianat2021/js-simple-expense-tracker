const validateForm = (
  title,
  amount,
  date,
  titleErrorMessage,
  amountErrorMessage,
  dateErrorMessage
) => {
  const trimmedTitle = title.value.trim();
  const trimmedAmount = amount.value.trim();
  const trimmedDate = date.value.trim();

  const isAmountNumber = isNaN(trimmedAmount) ? false : true;
  const errors = {
    formStatus:
      trimmedTitle && trimmedAmount && trimmedDate && isAmountNumber
        ? true
        : false,
    titleError: !trimmedTitle ? "Expense title is required!" : "",
    amountError: !trimmedAmount
      ? "Expense amount is required!"
      : isNaN(trimmedAmount)
      ? "Expense amount must be a number!"
      : "",
    dateError: !trimmedDate ? "Expense date is required" : "",
  };

  titleErrorMessage.textContent = errors.titleError || "";
  amountErrorMessage.textContent = errors.amountError || "";
  dateErrorMessage.textContent = errors.dateError || "";
  console.log(errors);
  return errors.formStatus;
};

export default validateForm;

// console.log(errors.formStatus);
// console.log(errors.titleError);
// console.log(errors.amountError);
// console.log(errors.dateError);
