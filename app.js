// function for taking value from input field

function inputFieldValue(inputId, willEmpty) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText)
    if (willEmpty) {
        inputField.value = ""
    }
    return inputFieldAmount;
}
// function for error handle
function errorHandle(alertId, inputBoxId) {
    document.getElementById(alertId).style.display = "block"
    document.getElementById(inputBoxId).addEventListener("focus", function () {
        document.getElementById(alertId).style.display = "none";
    })
}

// Income and expenses calculation part

document.getElementById("calculate").addEventListener("click", function () {
    const income = inputFieldValue("income")
    const foodExpenses = inputFieldValue("food-expenses", true);
    const rentExpenses = inputFieldValue("rent-expenses", true);
    const clothExpenses = inputFieldValue("cloth-expenses", true);
    const expenses = document.getElementById("total-expenses");
    const balace = document.getElementById("balance");
    const totalExpenses = foodExpenses + rentExpenses + clothExpenses;

    if (foodExpenses <= 0 || clothExpenses <= 0 || rentExpenses <= 0) {
        if (foodExpenses <= 0) {
            errorHandle("food-input-error", "food-expenses")
        }
        else if (clothExpenses <= 0) {
            errorHandle("cloth-input-error", "cloth-expenses")
        }
        else {
            errorHandle("rent-input-error", "rent-expenses")

        }
    }
    else if (isNaN(income) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothExpenses)) {
        if (isNaN(income)) {
            errorHandle("income-input-error", "income")
        }
        else if (isNaN(foodExpenses)) {
            errorHandle("food-input-error", "food-expenses")
        }
        else if (isNaN(rentExpenses)) {
            errorHandle("rent-input-error", "rent-expenses")
        }
        else {
            errorHandle("cloth-input-error", "cloth-expenses")
        }
    }

    else if (income < totalExpenses) {
        errorHandle("income-input-error", "income")
    }

    else {
        expenses.innerText = totalExpenses;
        balace.innerText = income - totalExpenses;
    }
})

//savings claculation part

document.getElementById("saving-btn").addEventListener("click", function () {

    const savingPercent = inputFieldValue("saving-input")
    const income = inputFieldValue("income");
    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = document.getElementById("remaining-balance");
    const balace = document.getElementById("balance").innerText;
    const balaceValue = parseFloat(balace)
    const saving = income * (savingPercent / 100);

    if (balaceValue == 0 || isNaN(savingPercent) || (income == 0 || isNaN(income))) {
        if (balaceValue == 0) {
            errorHandle("saving-input-error", "saving-input")
        }
        else {
            errorHandle("saving-input-error", "saving-input")
        }
    }

    else {
        const remainingValue = balaceValue - saving
        if (remainingValue < 0) {
            errorHandle("saving-input-error", "saving-input")
        }
        else {
            remainingBalance.innerText = remainingValue;
            savingAmount.innerText = saving;
        }
    }
})

