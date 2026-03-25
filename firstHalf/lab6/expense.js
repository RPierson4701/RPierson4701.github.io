let categories = "";

const source = document.getElementById("expenseSource");
const dateTrans = document.getElementById("expenseDate");
const expenseAmount = document.getElementById("expenseAmount");
const payment = document.getElementById("frequency");
const rational = document.getElementById("rational");


function validateCheckboxes() {
    let checkboxes = document.getElementsByName("expenseCategory");
    var oneChecked = false;
    categories = "";
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            oneChecked = true;
            categories += " " + checkbox.value;
        }
    }

    return oneChecked;
}

let today = new Date();
var formattedToday = today.toISOString().slice(0, 10);
dateTrans.max = formattedToday;


document.getElementById("expensesForm").addEventListener("submit", function (e) {
    // Stop the form from submitting automatically
    if (!validateCheckboxes()) {
        e.preventDefault();
        alert("Select at least one expense category.")
        return;
    }

    // Log to console (or do whatever you need with the data)
    console.log("Form submitted successfully!");
    console.log("Expense Place: ", source.value);
    console.log("Date: ", dateTrans.value);
    console.log("Amount: ", expenseAmount.value);
    console.log("Category: ", categories);
    console.log("Payment Method: ", payment.value);
    console.log("Rational: ", rational.value);
});