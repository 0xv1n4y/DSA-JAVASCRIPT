//Reverse a string

const reverseString = (string) => {
    return [...string].reverse().join("");
}

console.log(reverseString("Vinay"))

const isPallindrom = (value) => {
    var reverseValue;
    if(typeof(value) === "number"){
        const convertString = value.toString();
        reverseValue = [...convertString].reverse().join("");
    }else {
        reverseValue = [...value].reverse().join("");
    }

    if(value == reverseValue){
        console.log(`The word ${value} is pallindrom ${reverseValue}`)
    } else{
        console.log(`The word ${value} is not a palindrom `)
    }
   
}

isPallindrom("cddc")