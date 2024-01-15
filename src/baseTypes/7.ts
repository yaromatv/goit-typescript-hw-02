/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekendDays {
    Monday = 0,
    Tuesday = 0,
    Wednesday = 0,
    Thursday = 0,
    Friday = 0,
    Saturday = 1,
    Sunday = 1,
}

function isWeekend(weekday: keyof typeof WeekendDays): boolean {
    return WeekendDays[weekday] === 1;
}
console.log(isWeekend("Monday"));
console.log(isWeekend("Saturday"));
