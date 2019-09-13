// Add an 'enter' keypress event handler so it
// may act the same as the arrow keypress
let animatedForm = () => {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling; // input fields
      const parent = arrow.parentElement; // field-name, field-email, field-password
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      //get rid of animation
      parent.addEventListener("animationEnd", () => {
        parent.style.animation = "";
      });
    });
  });
};

// User validation
let validateUser = user => {
  if (user.value.length < 6) {
    console.log("Username must be longer than 6 characters long");

    // pass a color to error
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
};

// Email Validation
let validateEmail = email => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
};

// Write my own password validation

// Change background color on error
let error = color => {
  document.body.style.backgroundColor = color;
};

// Moves to the next input after previous validation
let nextSlide = (parent, nextForm) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
};

animatedForm();
