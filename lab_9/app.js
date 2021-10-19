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
console.log(getHashTags("Прохожу курс по #javascript и #web и ещё #много #хештегов #мрр #cat_id_rsa"));
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

console.log(normalizeHashTags(["Web", "hashtag", "web", "JavaScript", "Script", "coding"]));
