console.log("# Task 1")

function getHashTags(text) {
    const newTextArray = [];
    for (const subString of text.split(" ")) {
        if (subString[0] == "#") {
            newTextArray.push(subString.slice(1));
        }
    }
    return newTextArray;
}
// console.log(getHashTags("Прохожу курс по #javascript и #web и ещё #много #хештегов #мрр #cat_id_rsa"));
console.log("# Task 2");
function normalizeHashTags(hashtags) {
    /*
     reduce Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
     аккумулятор - накапливает значение от калбека
    */
    return hashtags.reduce((accum, tag) => {
        if (!accum.includes(tag.toLowerCase())) { // если массив не содержит тег (приведенный к маленьким буквам)
            accum.push(tag.toLowerCase()); // добавляет тег маленькими буквами
        }
        return accum;
    }, []);
}

// console.log(normalizeHashTags(["Web", "hashtag", "web", "JavaScript", "Script", "coding"]));
console.log("# Task 3");

var phone = {};

function startTask(command) {

    if (command.includes("ADD")) {
        var line = command.slice(3).trim();
        var name = line.slice(0, line.indexOf(" "));
        line = line.slice(line.indexOf(" ")).trim();
        let numbers = line.split(",");

        if (name in phone) {
            phone[name] = phone[name].concat(numbers);
        }
        else {
            phone[name] = numbers;
        }
    }
    else if (command.includes("SHOW")) {
        var showPhones = [];
        for (const name in phone) {
            showPhones.push(name + ": " + phone[name].join(", "));
        }
        return showPhones.sort();
    }
    else if (command.includes("REMOVE_PHONE")) {
        let number = command.slice(13);
        for (const i in phone) {
            if (phone[i].includes(number)) {
                phone[i].splice(phone[i].indexOf(number), 1);
                if (phone[i].length == 0)
                    delete phone[i];
                return true;
            }
        }
        return false;
    }
}
startTask("ADD Name1 555-888-555-888");
startTask("ADD Name1 555-888-555-82");
startTask("ADD Name2 555-888-555-888");
console.log(startTask("SHOW"));
startTask("REMOVE_PHONE 555-888-555-888");
console.log(startTask("SHOW"));