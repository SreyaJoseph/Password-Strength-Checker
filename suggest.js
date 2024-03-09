function generatePassword() {

    var favFood  = document.getElementById("food").value.toLowerCase();
    var favColor = document.getElementById("favColor").value.toLowerCase();
    var favNumber =parseInt(document.getElementById("favNumber").value);

    // Generate password suggestion based on user input
    var password =favFood.substring() + favColor.substring() + "@" + favNumber.toString().substring(0, 2);
    password = password.substring(); // Limit password length to 12 characters

    document.getElementById("password").innerHTML = "Password Suggestion: " + password;
}