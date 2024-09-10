let data = []; // Array to store all user data

document.querySelector(".btn").addEventListener("click", function () {
  // Prompt for user input
  let name = prompt("Enter your name:");
  let email = prompt("Enter your email:");
  let password = prompt("Enter your password:");

  // Create an object to store the current user's data
  let userData = {
    name: name,
    email: email,
    password: password,
  };

  // Add the current user's data to the array
  data.push(userData);

  // Display the updated data on the page
  displayUserData();
});

// Function to display the user data on the page
function displayUserData() {
  // Get the container element where user data will be displayed
  let container = document.querySelector(".user-data-container");

  // Clear the container before displaying updated data
  container.innerHTML = "";

  // Iterate over the data array and create HTML for each user
  data.forEach(function (user, index) {
    // Create a div to hold this user's data
    let userDiv = document.createElement("div");
    userDiv.classList.add("user-entry");

    // Add content to the div with classes for each <p> tag and input fields
    userDiv.innerHTML = `
            <p class="user-id"><strong>User ${index + 1}</strong></p>
            <p class="user-name">Name: <input type="text" class="name-input" value="${
              user.name
            }" data-index="${index}" /></p>
            <p class="user-email">Email: <input type="text" class="email-input" value="${
              user.email
            }" data-index="${index}" /></p>
            <p class="user-password">Password: <input type="text" class="password-input" value="${
              user.password
            }" data-index="${index}" /></p>
            <button class="delete-btn" data-index="${index}"><strong>Delete</strong></button>`;

    // Append the userDiv to the container
    container.appendChild(userDiv);
  });

  // Attach event listeners to all delete buttons
  document.querySelectorAll(".delete-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      let userIndex = this.getAttribute("data-index");
      deleteUser(userIndex);
    });
  });

  // Attach event listeners to all input fields to update the data array and highlight changes
  document.querySelectorAll(".name-input").forEach(function (input) {
    input.addEventListener("input", function () {
      let userIndex = this.getAttribute("data-index");
      let oldValue = data[userIndex].name;
      data[userIndex].name = this.value;
      console.log(`Name Updated: ${oldValue} -> ${data[userIndex].name}`);

      // Highlight the updated field
      this.classList.add("updated");
      setTimeout(() => this.classList.remove("updated"), 2000);
    });
  });

  document.querySelectorAll(".email-input").forEach(function (input) {
    input.addEventListener("input", function () {
      let userIndex = this.getAttribute("data-index");
      let oldValue = data[userIndex].email;
      data[userIndex].email = this.value;
      console.log(`Email Updated: ${oldValue} -> ${data[userIndex].email}`);

      // Highlight the updated field
      this.classList.add("updated");
      setTimeout(() => this.classList.remove("updated"), 2000);
    });
  });

  document.querySelectorAll(".password-input").forEach(function (input) {
    input.addEventListener("input", function () {
      let userIndex = this.getAttribute("data-index");
      let oldValue = data[userIndex].password;
      data[userIndex].password = this.value;
      console.log(
        `Password Updated: ${oldValue} -> ${data[userIndex].password}`
      );

      // Highlight the updated field
      this.classList.add("updated");
      setTimeout(() => this.classList.remove("updated"), 2000);
    });
  });
}

// Function to delete a user from the data array and update the display
function deleteUser(index) {
  data.splice(index, 1); // Remove the user at the given index
  displayUserData(); // Update the display
}

// Search functionality
document.querySelector(".searchbtn").addEventListener("click", function () {
  // Get the input values for name and password
  let inputname = document.querySelector(".inputname").value;
  let inptpass = document.querySelector(".inptpass").value;

  // Check if the input matches any user in the data array
  let userFound = data.find(
    (user) => user.name === inputname && user.password === inptpass
  );

  // Display appropriate message based on the search result
  if (userFound) {
    alert("Login successful");
  } else {
    alert("Login failed");
  }
});
(function () {
  console.log("hello i am iife");
})();
