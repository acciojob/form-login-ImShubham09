function getFormvalue() {
    //Write your code here
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = document.getElementById("form1");

    // Retrieve the values of the input fields by their name attribute
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display the concatenated result using alert
    alert(firstName + " " + lastName);
}

