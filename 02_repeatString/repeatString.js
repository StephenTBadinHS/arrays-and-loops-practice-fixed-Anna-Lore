const repeatString = function(string1, i) {
let string2 = '';
while (i > 0){
    string2 = string2 + string1;
    i++;
}
return string1;

}

// Do not edit below this line
console.log(repeatString('hey', 3));
