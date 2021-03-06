try {
    var time = date("2017-09-03 12:55")
        .add(5, "days")
        .add(10, "hours")
        .substract(-1, "month");
    console.log(time.value);
} catch (e) {
    console.log(e.message);
}

function isValidValue(value) {
    if (value < 0 || isNaN(value)) throw new TypeError("Number shouldn't be negative");
}
function date(timestamp) {
    var _date = new Date(timestamp); // можно и так передавать
    return {
        add: function (count, command) {
            count = parseInt(count);
            isValidValue(count);
            console.log("-------ADD");
            console.log("time before: " + _date);
            _date = getNewDate(count, command, _date);
            console.log("time after: " + _date);
            return this;
        },
        substract: function (count, command) {
            count = parseInt(count);
            isValidValue(count);
            console.log("-------SUBSTR");
            console.log("time before:" + _date);
            _date = getNewDate(-1 * count, command, _date);
            return this;
        },
        get value() {
            var year = _date.getFullYear();
            var month = _date.getMonth() + 1 < 10 ? "0" + (_date.getMonth() + 1) : _date.getMonth() + 1;
            var days = _date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate();
            var hours = _date.getHours() < 10 ? "0" + _date.getHours() : _date.getHours();
            var minutes = _date.getMinutes() < 10 ? "0" + _date.getMinutes() : _date.getMinutes();
            return `-------\nResult: ${year}-${month}-${days} ${hours}:${minutes}`;
        }
    }
}
function getNewDate(count, command, _date) {
    switch (command) {
        case "years": {
            _date.setFullYear(_date.getFullYear() + count);
            return _date;
        }
        case "month": {
            _date.setMonth(_date.getMonth() + count);
            return _date;
        }
        case "days": {
            _date.setDate(_date.getDate() + count);
            return _date;
        }
        case "hours": {
            _date.setHours(_date.getHours() + count);
            return _date;
        }
        case "minutes": {
            _date.setMinutes(_date.getMinutes() + count);
            return _date;
        }
        default: {
            throw new TypeError("Unknown command");
        }
    }
}