/**
 * > The first rule of functions is that they should be small
 * > The second rule of functions is that they should be smaller than that
 */

/** 1) Doing only one thing */

// async function login(username, password) {
//   // login with the client database
//   const accessToken = await database.login(username, password);

//   if (!accessToken) {
//     throw new Error("Wrong credentials");
//   }

//   // Saving the accessToken in the localStorage
//   localStorage.serItem("accessToken", accessToken);

//   // Redirect to the home page
//   redirectTo("/");
//   notifyUser("success", e.message);
// }

/** 2) Extracting other functions */
function submitLogin(username, password) {
  try {
    // Check the validity of the fields
   validateLoginFields(username, password)

    // logging in the user
    await login(username, password)

    // Redirect to the home page
    redirectTo("/");
    notifyUser("success", e.message);
  } catch (e) {
    // Managing errors
    console.error(e)
    notifyUser("error", e.message);
  }
}

function validateLoginFields(username, password) {
  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters long");
  }
  
  if (password.length < 3) {
    throw new Error("Password must be at least 3 characters long")
  }
  
}

