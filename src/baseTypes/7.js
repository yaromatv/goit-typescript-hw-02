/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var WeekendDays;
(function (WeekendDays) {
    WeekendDays[WeekendDays["Monday"] = 0] = "Monday";
    WeekendDays[WeekendDays["Tuesday"] = 0] = "Tuesday";
    WeekendDays[WeekendDays["Wednesday"] = 0] = "Wednesday";
    WeekendDays[WeekendDays["Thursday"] = 0] = "Thursday";
    WeekendDays[WeekendDays["Friday"] = 0] = "Friday";
    WeekendDays[WeekendDays["Saturday"] = 1] = "Saturday";
    WeekendDays[WeekendDays["Sunday"] = 1] = "Sunday";
})(WeekendDays || (WeekendDays = {}));
function isWeekend(weekday) {
    console.log(WeekendDays[weekday]);
}
isWeekend("Monday");
console.log("5");
