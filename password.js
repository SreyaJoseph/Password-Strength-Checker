function checkPassword() {
    var password = document.getElementById("password").value;
    var strength;

    // Check password strength based on criteria (add more if needed)
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
        strength = "Very Strong";
    } else if (password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6 && /[A-Za-z]/.test(password)) {
        strength = "Moderate";
    } else {
        strength = "Weak";
    }
    var progress = document.getElementById("progress");

    switch (strength) {
       
        case "Moderate":
            progress.style.width = "50%";
            document.getElementById("result").innerHTML = "Password Strength: " + strength;

            break;
        case "Strong":
            progress.style.width = "75%";
            document.getElementById("result").innerHTML = "Password Strength: " + strength;

            break;
        case "Very Strong":
            progress.style.width = "100%";
            document.getElementById("result").innerHTML = "Password Strength: " + strength;

            break;
        case "Weak":
                progress.style.width = "20%";
                document.getElementById("result").innerHTML = "Password Strength: " + strength;
                document.getElementById("myLink").addEventListener("click", function() {
                
                });
                
                break;
        default:
            progress.style.width = "0%";
    }
   
   
}
