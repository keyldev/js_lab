console.log("# Task 1")

function getHashTags(text) {

    const newTextArray = [];
    const textToArray = text.split(" ");
    for(let subString of textToArray){
        if(subString[0] == "#"){
            newTextArray.push(subString.slice(1));
        }
    }
    return newTextArray;
}
console.log(getHashTags("Прохожу курс по #javascript и #web и ещё #много #хештегов #мрр #cat_id_rsa"));
console.log("# Task 2");
function normalizeHashTags(text) {
    
}
