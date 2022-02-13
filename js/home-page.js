function loginField() {
    const nameValueText = document.getElementById("name-field");
    const nameValue = nameValueText.value;

    const emailValueText = document.getElementById("email-field");
    const emailValue = emailValueText.value;

    const passValueText = document.getElementById("password-field");
    const passValue = passValueText.value;

    if ((nameValue == "Rokib" || emailValue == "example@gmail.com") && (passValue == "secret")) {
        window.location.href = "banking.html";
    }
};

document.getElementById("login-button").addEventListener("click", function () {
    loginField();
});