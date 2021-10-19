console.log("# Task 1");

function sum(a, b) {
    return Number(a) + Number(b);
}
console.log("Сумма 2 инта: " + sum(1, 5));
console.log("Сумма инт чар: " + sum(5, + '1'));
console.log("Сумма строк: " + sum("12 а", "11 а"));
console.log("# Task 2");

function isValidTime(hour, minute) {
    if (hour > 0 & hour < 23 & minute > 0 & minute < 59) return true;
    else return false;
}

console.log("Валидность времени 12:30 : " + isValidTime(12, 30));
console.log("Валидность времени 12:60 : " + isValidTime(12, 60));

console.log("# Task 3");

function addTime(hour, minute, interval) {

    hour += Math.floor((minute + interval) / 60); // 35 + 30 = 65 / 60 = 1 ( / - остаток 1)
    minute = (minute + interval) % 60; // 35 + 30 = 65, 65 % 60 - остаток 5 ( %)

    hour = hour % 24; // 

    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }

    return hour + ":" + minute;
}
console.log("Время: " + addTime(12, 30, 35));
