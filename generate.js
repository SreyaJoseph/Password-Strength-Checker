function generatePassword() {
    var length = document.getElementById("length").value;
    var includeDigits = document.getElementById("includeDigits").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;

    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";

    if (includeDigits) {
        charset += "0123456789";
    }

    if (includeSymbols) {
        charset += "!@#$%^&*()_+";
    }

    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("password").innerHTML = "Generated Password: " + password;
}
