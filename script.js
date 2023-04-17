// Define a data structure for an employee
function Employee(name, age, id, contact, email) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.contact = contact;
    this.email = email;
  }
  
  // Create an array to hold all the employees
  var employees = [];
  
  // Function to validate name
  function validateName(name) {
    if (name.length < 3) {
      alert("Name should be at least 3 characters long.");
      return false;
    }
    return true;
  }
  
  // Function to validate phone number
  function validatePhone(phone) {
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be in the format of xxx-xxx-xxxx.");
      return false;
    }
    return true;
  }
  
  // Function to validate ID
  function validateID(id) {
    if (isNaN(id)) {
      alert("ID should consist only of numbers.");
      return false;
    }
    return true;
  }
  
  // Function to validate email
  function validateEmail(email) {
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      alert("Email should be in the format of abc@xyz.com.");
      return false;
    }
    return true;
  }
  
  // Function to add an employee
  function addEmployee() {
    var name = prompt("Enter the name:");
    if (!validateName(name)) {
      return;
    }
    
    var age = parseInt(prompt("Enter the age:"));
    
    var id = parseInt(prompt("Enter the ID:"));
    if (!validateID(id)) {
      return;
    }
    
    var contact = prompt("Enter the contact:");
    if (!validatePhone(contact)) {
      return;
    }
    
    var email = prompt("Enter the email:");
    if (!validateEmail(email)) {
      return;
    }
  
    var employee = new Employee(name, age, id, contact, email);
    employees.push(employee);
  
    // Save employee details in a text file
    var fileContent = "Name: " + name + "\n" +
                      "Age: " + age + "\n" +
                      "ID: " + id + "\n" +
                      "Contact: " + contact + "\n" +
                      "Email: " + email;
  
    var fileName = employees.length + ".txt";
    var fileBlob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    var fileUrl = URL.createObjectURL(fileBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  
    alert("Employee added successfully!");
  }
  
  // Function to view an employee by ID
  function viewEmployeeById() {
    var id = parseInt(prompt("Enter the ID of the employee:"));
    var foundEmployee = false;
  
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        alert("Name: " + employees[i].name + "\n" +
              "Age: " + employees[i].age + "\n" +
              "ID: " + employees[i].id + "\n" +
              "Contact: " + employees[i].contact + "\n" +
              "Email: " + employees[i].email);
        foundEmployee = true;
        break;
      }
    }
}; 
  