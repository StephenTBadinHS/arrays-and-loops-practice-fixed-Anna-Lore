const reverseString = function(reverseString1) {
    console.log(reverseString1);
    let reverseString2 = "";
    for (let i = 1; i <= reverseString1.length; i++){
        reverseString2 = reverseString2 + reverseString1.at(-i)
    }
    return reverseString2;

}

// Do not edit below this line
console.log(reverseString("Hello there"));
