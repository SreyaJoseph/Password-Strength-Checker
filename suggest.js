function generatePassword() {
    var likes = document.getElementById("likes").value.toLowerCase();
    var hobbies = document.getElementById("hobbies").value.toLowerCase();
    var favColor = document.getElementById("favColor").value.toLowerCase();
    var favNumber = document.getElementById("favNumber").value;

    // Generate password suggestion based on user input
    var password = likes.replace(/\s/g, '') + hobbies.replace(/\s/g, '') + favColor + favNumber;
    password = password.substring(0, 12); // Limit password length to 12 characters

    document.getElementById("password").innerHTML = "Password Suggestion: " + password;
}