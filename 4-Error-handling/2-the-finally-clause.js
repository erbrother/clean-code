/** Use the `finally` clause */

let isLoading = false;

try {
  await fetchArticles();
} catch (e) {
  console.log(e);
  notifyErrorToUser(e);
} finally {
  isLoading = false;
}
