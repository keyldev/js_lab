console.log("# Task 1")

function getHashTags(text) {
    
    let newTextArray = [];
    let textToArray = text.split(" ");
    for (var i = 0; i < textToArray.length; i++) {
        var subString = textToArray[i];

        if(subString[0] == "#"){
            newTextArray.push(subString.slice(1));
        }
    }
    return newTextArray;
}
console.log(getHashTags("Прохожу курс по #javascript и #web и ещё #много #хештегов #мрр #cat_id_rsa"));