async function validate(data) {
  const name = checkName(data.name);
  const company = checkCompany(data.company);
  const email = checkEmail(data.email);
  const phone = checkPhone(data.phone);
  const address = checkAddress(data.address);
  const note = checkNote(data.note);
  const isActive = checkIsActive(data.isActive);

  const result = {
    name: name,
    company: company,
    email: email,
    phone: phone,
    address: address,
    note: note,
    isActive: isActive,
  };

  return result;
}

function checkName(name) {
  if (name.length == 0 || name.length > 8) {
    throw new Error("Name must be between 0 and 8 characters!");
  }
  return name;
}

function checkCompany(company) {
  if (company == null) {
    return null;
  }
  if (company.length == 1 || company.length > 8) {
    throw new Error("Company must be between 2 and 8 characters!");
  }
  return company;
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

function checkPhone(phone) {
  if (phone == null) {
    return null;
  }
  if (phone.length !== 11) {
    throw new Error("Phone must have 11 numbers, including the DD");
  }
  return phone;
}

function checkAddress(address) {
  if (address == null) {
    return null;
  }
  if (!(typeof address == "string")) {
    throw new Error("Address must be string");
  }
  return address;
}

function checkNote(note) {
  if (note == null) {
    return null;
  }
  if (!(typeof note == "string")) {
    throw new Error("Note must be string");
  }
  return note;
}

function checkIsActive(isActive) {
  if (isActive == null) {
    throw new Error("IsActive can not be null");
  }
  if (!(typeof isActive == "boolean")) {
    throw new Error("IsActive must be boolean");
  }
  return isActive;
}

module.exports = {
  validate,
  checkName,
  checkCompany,
  checkEmail,
  checkPhone,
  checkAddress,
  checkNote,
  checkIsActive,
};
