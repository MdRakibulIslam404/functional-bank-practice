// get input value
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmount = parseFloat(inputValue.value);
    inputValue.value = "";
    return inputAmount;
};

// add amount to deposit total and withdraw total
function addAmount(totalFieldId, newAmount) {
    const totalField = document.getElementById(totalFieldId);
    const previousTotalAmount = parseFloat(totalField.innerText);
    totalField.innerText = previousTotalAmount + newAmount;
};

// get current balance
function getCurrentBalance() {
    const balanceField = document.getElementById("balance-total");
    const previousBalance = parseFloat(balanceField.innerText);
    return previousBalance;
}

// update balance
function updateBalance(newBalance, isAdd) {
    const balanceField = document.getElementById("balance-total");
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceField.innerText = previousBalance + newBalance;
    }
    else {
        balanceField.innerText = previousBalance - newBalance;
    }
};

// deposit button
function depositButton() {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        addAmount("deposit-Total", depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert("Please input a number above '0'")
    }
};

// withdraw button
function withdrawButton() {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        addAmount("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else {
        alert("Please input a number above '0' and less than or equal to balance total")
    }
};