// Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
num = 70;
if (num % 10 == 0){
    console.log("good");
} else{
    console.log("bad");
}




// Take the user's name and age as input using prompts. Then return back the following statement as an alert by substituting their name and age, "name is age years old". Use template literas to print this sentence
let userName = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
alert(`${userName} is ${age} years old`);




// Write a switch statement to print the months in a quarter.
// Months in Quarter1:January, February, March
// Months in Quarter2:April, May, June
// Months in Quarter3:July, August, September
// Months in Quarter4:October, November, December [Use the number as the case value in switch]
let monthQuarter = 1;
switch(monthQuarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a Quarter");
}




//A string is a "golden string" if it starts with character "A" or "a" and has a total length greater than 5. For a given string print if it is golden or not.
let str = "string";
if ((str[0] === 'a' || str[0] === 'A') && (str.length > 5)){
    console.log("it is a golden string")
} else{
    console.log("it is not a golden string");
}





//Write a program to find the largest of 3 numbers.
let num1 = 40;
let num2 = 50;
let num3 = 10;

if (num1 > num2){
    if (num1 > num3){
        console.log(`${num1} is the largest`);
    } else{
        console.log(`${num3} is the largest`)
    }
} else{
        if (num2 > num3){
            console.log(`${num2} is the largest`);
        } else{
            console.log(`${num3} is the largest`);
        }
}



//Write a program to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit i.e.2
let numberOne = 32;
let numberTwo = 4567782;

if (numberOne % 10 === numberTwo % 10){
    console.log("the two numbers have same last digit that is", numberOne % 10);
} else {
    console.log("the two numbers do not have same last digit");
}
