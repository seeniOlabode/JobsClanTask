const validationMessages = {
  empty: "This field is required",
  invalid: "Invalid Input",
};

function ValidateEmail(inputText) {
  var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText === "") {
    return {
      pass: false,
      message: validationMessages.empty,
    };
  } else if (inputText.match(mailformat)) {
    return {
      pass: true,
      message: validationMessages.invalid,
    };
  } else {
    return {
      pass: false,
      message: validationMessages.invalid,
    };
  }
}

function ValidateName(inputText) {
  if (inputText == "") {
    return {
      pass: false,
      message: validationMessages.empty,
    };
  } else if (inputText.length > 2) {
    return {
      pass: true,
      message: "",
    };
  } else {
    return {
      pass: false,
      message: validationMessages.invalid,
    };
  }
}

function ValidatePhoneNumber(inputText) {
  var phoneFormat = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  if (phoneFormat.test(inputText)) {
    return {
      pass: true,
      message: "",
    };
  } else {
    return {
      pass: false,
      message: validationMessages.invalid,
    };
  }
}

export { ValidateEmail, ValidateName, ValidatePhoneNumber };
