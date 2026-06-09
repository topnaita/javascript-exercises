const leapYears = function (year) {
  if (year % 400 === 0) {
    return true; // Divisible by 400? Leap year.
  } else if (year % 100 === 0) {
    return false; // Divisible by 100 but not 400? Not a leap year.
  } else if (year % 4 === 0) {
    return true; // Divisible by 4 but not 100? Leap year.
  } else {
    return false; // Anything else is not a leap year.
  }
};
leapYears(1985);
// Do not edit below this line
module.exports = leapYears;
