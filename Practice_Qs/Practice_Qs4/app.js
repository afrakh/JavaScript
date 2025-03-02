//default parameters
function sumOne(a, b = 3){
    return a + b;
}

console.log(sumOne(2)); //5
console.log(sumOne(2, 6)); //8
console.log(sumOne()); //NaN

function sumTwo(a = 4, b){
    return a + b;
}

console.log(sumTwo(3)); //a = 3, b = undefined
console.log(sumTwo(8, 1)); //9


//concept of spread
console.log(Math.min(1, 2, 3, 4, 0, 9));
let arr = [1, 2, 3, 4, 5, -1];
console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]));
//using spread

console.log(...arr);
console.log(Math.min(...arr));
arr.push(-10);
console.log(...arr);
console.log(Math.min(...arr));
console.log(Math.max(...arr));

console.log(..."afrakhurram");
console.log(..."javascript");

//spread with array literals
let array = [1, 2, 3, 4, 5];
let newArray = [...array];
console.log(newArray);
newArray.push(-1);
console.log(newArray);
console.log(array);

let chars = [..."hello"];
console.log(chars);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];

let numsEven = [...even, ...odd];
let numsOdd = [...odd, ...even];

console.log(numsEven);
console.log(numsOdd);

//spread with object literals
let data = {
    email:"ironman@gmail.com",
    password:"abcd"
};

let dataCopy = {...data};
console.log(dataCopy);

let dataCopyTwo = {...data, id:123, country:"Pakistan"};
console.log(dataCopyTwo);

//spreading characters of array or string in an object

let array1 = [1, 2, 3, 4, 5];
let str = "hello";

let obj1 = {...array1};
let obj2 = {...str};

console.log(obj1); // -> key:value, index:value
console.log(obj2);


//Rest
function print(...args){
    for(let i = 0; i< args.length; i++){
        console.log("you gave us:", args[i]);
    }
}

function min(a, b, c, d){
    console.log(arguments);
}

min(1, 2, 3, 4);

function minimum(){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(8); //error
}

minimum(1, 2, 3, 4);

// function sumFunc(){
//     // return arguments.reduce((sum, el) => sum + el); //arguments.reduce is not a method
// }

//when we want to use array methods, we use rest concept


function sumFunc(...args){
    return args.reduce((sum, el) => sum + el);
}

function minFunc(...args){
    console.log(args);
    return args.reduce((min, el) => {
        if (min > el){
            return el;
        } else{
            return min;
        }
    });
}


//Destructuring

let names = ["tony", "bruce", "steve", "peter", "abc", "xyz", "pyq"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(others); //concept of rest

//Destructuring concept for objects

const student = {
    name:"afra",
    age:19,
    class:12,
    subjects:["urdu", "math", "science", "social studies", "english"],
    username:"afra@123",
    password:"abcd", 
    city:"karachi"
};

// let username = student.username;
// let password = student.password;

const {username, password} = student;
const {username:user, password:secret, city} = student;
const {city:place = "Lahore"} = student //karachi

console.log(username);
console.log(password);
console.log(user);
console.log(secret);
console.log(place);