const Validator = require("validator");

module.exports = function validateLoginInput(data) {
  //Implement Validator to validate Login Fields, if there is an error in the error obj the isValid Should be false
  let errors = {};

  return {
    errors,
    isValid: true,
  };
};
