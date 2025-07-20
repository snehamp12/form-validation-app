const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Name
  if (nameValue === '') {
    setError(nameInput, 'Name is required');
  } else {
    setSuccess(nameInput);
  }

  // Email
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email);
  }

  // Password
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 6) {
    setError(password, 'Password must be at least 6 characters');
  } else {
    setSuccess(password);
  }

  // Confirm Password
  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Confirm your password');
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, 'Passwords do not match');
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(input, message) {
  const parent = input.parentElement;
  parent.className = 'input-group error';
  parent.querySelector('small').innerText = message;
}

function setSuccess(input) {
  const parent = input.parentElement;
  parent.className = 'input-group success';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
