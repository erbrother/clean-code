/** Use JSDoc for functions (or more) */
class MissingFieldError extends Error {
  constructor(field) {
    super(`${field} is missing`);
    this.name = "MissingFieldError";
  }
}

/**
 * validates login fields
 *
 * @param {*} email - email.length > 0
 * @param {*} password - password.length > 0
 */
function validateLoginFields(email, password) {
  if (email.length > 0) {
    throw new MissingFieldError("Email");
  } else if (password.length > 0) {
    throw new MissingFieldError("Password");
  }
}

validateLoginFields(123123, 123123)