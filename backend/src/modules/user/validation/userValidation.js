async function validate(data) {
  const userName = checkUserName(data.userName);
  const email = checkEmail(data.email);
  const password = checkPassword(data.password, data.confirmPassword);

  const result = {
    userName: userName,
    email: email,
    password: password,
  };

  return result;
}

function checkUserName(userName) {
  if (userName.length == 0 || userName.length > 8) {
    throw new Error("User name must be between 0 and 8 characters!");
  }
  if (userName.length > 0 && userName.length < 8) {
    return userName;
  }
  throw new Error("Invalid User Name!");
}

function checkEmail(email) {
  if (email.length == 0) {
    throw new Error("Email can not be empty!");
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    throw new Error("Invalid Email!");
  }
  return email;
}

function checkPassword(password, confirmPassword) {
  const containsNumber = /[0-9]/;
  const containsUppercase = /[A-Z]/;
  const containsLowercase = /[a-z]/;
  const containsSpecialCharacters = /[!@#$%*()_+^&{}}:;?.]/;

  if (password !== confirmPassword) {
    throw new Error("Password and Confirm Password must match!");
  }
  if (password.length == 0 || password.length > 8) {
    throw new Error("Password must be between 0 and 8 characters!");
  }
  if (
    containsNumber.test(password) == false ||
    containsUppercase.test(password) == false ||
    containsLowercase.test(password) == false ||
    containsSpecialCharacters.test(password) == false
  ) {
    throw new Error(
      "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
    );
  }
  return password;
}

module.exports = {
  validate,
};
