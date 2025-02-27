//javascript program to illustrate if statement
let age = 19;
if (age > 18)
    console.log("Congratulation  , You are elegible to drive")

//javascript program to illustrate if -else statement

let n = 17;

if (n < 18) {
    console.log("Sorry! ,Your are not ellegible for drive");
} else {
    console.log("Congratulation  , You are elegible to drive");
}

//javascript program to illustrate nested- if statement
let a = 10;
if (i == 10) {
    if (i < 15) {
        console.log("i is smaller than 15");
        /*nested if statement will inly executed if statement
        above it is true*/
        if (i < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}

//javascript program to illustrate nested- if - else statement
let b = 20;
if (b == 10)
    console.log("b is 10");
else if (b == 15)
    console.log("b is 15");
else if (b == 20)
    console.log("b is 20");
else
    console.log("b is not present");