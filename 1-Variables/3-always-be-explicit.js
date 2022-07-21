/** Be explicit */

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Webnesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// ❌ bad
daysOfTheWeek.forEach((d) => {
  doSomething(d);
});

// ✅ good
daysOfTheWeek.forEach((dayOfTheWeek) => {
  doSomething(dayOfTheWeek);
});
