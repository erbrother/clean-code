/** Never ignore caught errors */

try {
  somethingThatCanFail();
} catch (e) {
  console.log(e);
  notifyErrorToUser(e);
}
