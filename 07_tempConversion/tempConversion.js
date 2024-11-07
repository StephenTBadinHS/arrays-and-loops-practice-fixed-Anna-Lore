const convertToCelsius = function() {
    let degree0 = 32;
    var number1 = Math.round(degree0 - 32) * (5 / 9);
    var fix1 = number1.toFixed(1);
    return fix1;
}

const convertToFahrenheit = function() {
    let degree1 = 0;
    var number = Math.round(degree1 * (9 / 5) + 32);
    var fixed = number.toFixed(1);
    return fixed;
}

// Do not edit below this line

console.log(convertToCelsius());
console.log(convertToFahrenheit());
