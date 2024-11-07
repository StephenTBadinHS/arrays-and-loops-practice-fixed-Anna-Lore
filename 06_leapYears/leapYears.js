const leapYears = function() {
    year1 = 2000;
    year2 = 1985;
    
    
        if (year1 >= 4 && 400){
            console.log("It's a leap year: returns true");
        } else if (year1 <= 100) {
            console.log("It's not a leap year: returns false");
    } 

        if (year2 <= 4 && 400){
            console.log("It's a leap year: returns true");
        } else if (year2 >= 100) {
            console.log("It's not a leap year: returns false");
    
    }

}

// Do not edit below this line
console.log(leapYears());
