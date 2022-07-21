/** Create your own errors hierarchy */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class MissingFieldError extends Error {
  constructor(field) {
    super(`${field} is missing`);
    this.name = "MissingFieldError";
  }
}

try {
  fetchArticales();
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.name);
  } else {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
  }
}

function fetchArticales() {
  /**
   * Database operations ...
   */
  throw new ValidationError("Impossible to connect to the database");
}


