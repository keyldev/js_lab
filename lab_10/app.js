try {
    var time = date("2017-09-03 12:55")
        .add(5, "days");
    console.log(time.value);
} catch (e) {
    console.log(e.message);
}

function isValidValue(value) {
    if (value < 0 || isNaN(value)) throw new TypeError("Number shouldn't be negative");
}

function date(timestamp) {
    var _date = timestamp.slice(0, timestamp.indexOf(" ")).split("-").map(e => parseInt(e, 10)); // режет на год-месяц-день (массив)
    var _time = timestamp.slice(timestamp.indexOf(" ") + 1).split(":");

    var _date = new Date(_date[0], _date[1] - 1, _date[2], _time[0], _time[1]);
    return {
        add: function (count, command) {
            count = parseInt(count);
            isValidValue(count);
            _date = getNewDate(count, command, _date);

            return this;
        },
        substract: function (count, command) {
            count = parseInt(count);
            isValidValue(count);
            _date = getNewDate(-1 * count, command, _date);
            return this;
        },
        get value() {
            var year = _date.getFullYear();
            var month = _date.getMonth() + 1 < 10 ? "0" + (_date.getMonth() + 1) : _date.getMonth() + 1;
            var days = _date.getDate() < 10 ? "0" + _date.getDate() : _date.getDate();
            var hours = _date.getHours() < 10 ? "0" + _date.getHours() : _date.getHours();
            var minutes = _date.getMinutes() < 10 ? "0" + _date.getMinutes() : _date.getMinutes();

            return `${year}-${month}-${days} ${hours}:${minutes}`;
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