// function for taking value from input field

function inputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText)
    inputField.value = ""
    return inputFieldAmount;
}



// Income and expenses calculation part

document.getElementById("calculate").addEventListener("click", function () {
    const income = inputFieldValue("income")
    const foodExpenses = inputFieldValue("food-expenses");
    const rentExpenses = inputFieldValue("rent-expenses");
    const clothExpenses = inputFieldValue("cloth-expenses");
    const expenses = document.getElementById("total-expenses");
    const balace = document.getElementById("balance");
    const totalExpenses = foodExpenses + rentExpenses + clothExpenses;

    if (foodExpenses <= 0 || clothExpenses <= 0 || rentExpenses <= 0) {
        if (foodExpenses <= 0) {
            alert("food Expenses cant be nagative")
        }
        else if (clothExpenses <= 0) {
            alert("Cloth expenses cant be nagative")
        }
        else {
            alert("This is not your Fathers hotel. you stay here without zero cost")
        }
    }
    else if (isNaN(income) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothExpenses)) {
        if (isNaN(income)) {
            alert("enter a valid number in income field")
        }
        else if (isNaN(foodExpenses)) {
            alert("enter a valid number in food expenses field")
        }
        else if (isNaN(rentExpenses)) {
            alert("enter a valid number in rent expenses field")
        }
        else {
            alert("enter a valid number in cloth expenses field")
        }
    }

    else if (income < totalExpenses) {
        alert("income can't be less then tatal Expenses")
    }

    else {
        expenses.innerText = totalExpenses;
        balace.innerText = income - totalExpenses;
    }
})

