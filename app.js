function inputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText)
    inputField.value = ''
    return inputFieldAmount;
}




document.getElementById("calculate").addEventListener("click", function () {
    const income = inputFieldValue("income")
    const foodExpenses = inputFieldValue("food-expenses");
    const rentExpenses = inputFieldValue("rent-expenses");
    const clothExpenses = inputFieldValue("cloth-expenses");

    const totalExpenses = foodExpenses + rentExpenses + clothExpenses;

    const expenses = document.getElementById("total-expenses");

    expenses.innerText = totalExpenses;

    const balace = document.getElementById("balance");
    balace.innerText = income - totalExpenses;



})