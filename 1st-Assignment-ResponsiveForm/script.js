// Hide the submit details initially
document.getElementById("submitdetails").style.display = "none";
function submitForm() {
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Hide the form
    document.getElementById('regisForm').style.display='none';

    if (password !== confirmPassword) {
        // If passwords don't match, show an error message
        alert("Passwords do not match. Please try again.");
        // Clear the password and confirm password fields
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        // Focus on the password field for user convenience
        document.getElementById("password").focus();
        return false; // Prevent form submission
    }
  
    // Display submitted details
    document.getElementById("submitUsername").textContent = fullName;
    document.getElementById("submitEmail").textContent = email;
    document.getElementById("submitUserid").textContent = username;
    document.getElementById("submitpassword").textContent = password;

    // Show the confirmation section
    document.getElementById("submitdetails").style.display = "block";
  }


  function confirmForm() {
    // You can add additional logic here if needed
    alert("Form submitted successfully!");
    // You can also redirect the user or perform any other action
  }



//   //checking password
//   function submitForm() {
//     // Get the values of password and confirm password fields
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     // Check if the passwords match
    // if (password !== confirmPassword) {
    //     // If passwords don't match, show an error message
    //     alert("Passwords do not match. Please try again.");
    //     // Clear the password and confirm password fields
    //     document.getElementById("password").value = "";
    //     document.getElementById("confirmPassword").value = "";
    //     // Focus on the password field for user convenience
    //     document.getElementById("password").focus();
    //     return false; // Prevent form submission
    // }
//     // If passwords match, continue with form submission
//     return true;
// }
