    // Get form values
const incomeSource = document.getElementById("incomeSource").value;
const amount = document.getElementById("amount");
const frequency = document.getElementById("frequency").value;


document.getElementById("financeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically

    // Log to console (or do whatever you need with the data)
    console.log("Form submitted successfully!");
    console.log("Source: ", incomeSource);
    console.log("Amount: ", amount.value);
    console.log("Frequency: ", frequency);
});

amount.addEventListener("mouseout", function (e) {
    e.preventDefault();
})