/** Default within parameters */

function sleep(durationInMilliseconds = 1000) {
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
}

/** Object.assign() for default objects */

// ❌ bad
// function createTask(config) {
//   // Settings default values if neccessary
//   config.title = config.title ?? "Untitled task";
//   config.category = config.body ?? "main";
//   config.isActive = config.isActive ?? true

//   // ...
// }

// ✅ good
const defaultConfig = {
  title: "Untitled task",
  category: "main",
  isActive: true,
};

function createTask(rawConfig) {
  const config = Object.assign(defaultConfig, rawConfig);

  // ...
}

createTask({
  title: "Recording",
  isActive: false,
});
