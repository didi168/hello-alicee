function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var acctNumber = document.getElementById("acctNumber").value;
    var bankName = document.getElementById("bankName").value;

    // Simple validation example (you can add more complex validation)
    if (!fullName || !email || !acctNumber || !bankName) {
        alert("All fields are required.");
        return false;
    }

    // You can also add more validation here (e.g., email format, loan amount limits, etc.)

    // This is a simplified example; in a real application, you would send data to a server for processing.

    // Redirect to the success page in the "script" folder
    window.location.href = "./success.html";

    return true; // Form is submitted if all validation passes
}




