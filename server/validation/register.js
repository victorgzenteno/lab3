const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  //Implement Validator to validate Register Fields, if there is an error in the error obj the isValid Should be false
  let errors = {};

  return {
    errors,
    isValid: true,
  };
};
