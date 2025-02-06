// For the given string, trim it and convert it to uppercase

let str = " help! ";
console.log(str.trim().toUpperCase());



// For the given string predict the output of the following

let myName = "AfraKhurram";
console.log(myName.slice(4, 9)); // Khurr
console.log(myName.indexOf("ra")); // 2
console.log(myName.replace("Afra", "hi")); //hiKhurram



//Separate the Khurram part in above string & replace 'r' with 't' in it.

let newStr = myName.slice(4).replace('r', 't'); //Khutram
let replacedString = newStr.replace('r', 't');  //Khuttam
console.log(newStr);
console.log(replacedString);




//or by using method chaining

console.log(newStr.replace('r', 't').replace('r', 't'));

//For the given start state of an array, change it to final state as given by using array methods
// start -> ['january', 'july', 'march', 'august']
// final -> ['july', 'june', 'march', 'august']

let months = ["january", "july", "march", "august"];
months.shift();
let month = months.shift();
months.unshift("june");
months.unshift(month);
console.log(months);



// change the start state to final state using splice method
let months_start = ["january", "july", "march", "august"];
months_start.splice(0, 2, "july", "june");



// Return the index of "javascript" if the array was reversed"
let array = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(array.reverse().indexOf("javascript"));



//Create a nested array to show the state of tic-tac-toe game as in state.png.
let arr = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
// if we want to change the state of null in first row to 'O'
arr[0][1] = 'O';
