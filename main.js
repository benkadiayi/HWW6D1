// Basics of Javascript

/*
Multiline comment javascript
--Variable Declaration in JS--
Primitive Types: stings, integers, boolean
floats, arrays, object(aka dictionaries in python)

Functions in JS
Loops in JS
*/

// string variable
var first_name = 'Bill'
//Display value
console.log(first_name)
// Integer variable
var number = 31;

console.log(number)

// Float variable 
var float = 3.14;

console.log(float)

var array = [1,3,5,7]

console.log(array)

// Objrct variable 
var some_object = {'test' : 'Please test this'}

console.log(some_object)

// JS Hoisting example

console.log(random)
var random = 'this is a random string'
console.log(random)

// console.log(other)
// let other = 'here is another one'
// console.log(other)

// a better way of declaring variable
let full_name = first_name + ' Smith'
console.log(full_name)

const super_hero = 'The Incredible Hulk'
console.log(super_hero)

//Redeclaring variables
full_name = 'Terrel McKinney'
console.log(full_name)

// super_hero = 'Spiderman' cannot reassign const variables
// console.log(super_hero)

random = 'this is random'
console.log(random)

/**
 * Basic math operations in JS
 */
let sum = 4 + 3;
console.log(sum)

let diff = 8 - 4;
console.log(diff)

let product = 5 * 3;
console.log(product)

let divide = 4 / 4;
console.log(divide)

let square = 5 ** 2;
console.log(square)

// more math
let find_floor = Math.floor(33.333)
console.log(find_floor)

let find_ceilling = Math.ceil(33.333)
console.log(find_ceilling)

//The second to last mind bender
let crazy_stuff = float + '4' 
console.log(crazy_stuff)

let crazy_stuff2 = float + parseInt('4');
console.log(crazy_stuff2)

//more declaration
let nba_goat = 'MJ';

//Bad Redeclaration
// let nba_goat = 'Lebron'

/**
 * --- JS Functions ---
 */
// regukar named functions
function addNums(){
    let num = 4;
    let num2 = 4;

    return num + num2

}
// calling function
console.log(addNums())

// variable named function with parameters
let addNums2 = function(num,num2){
    return num + num2
}

console.log(addNums2(3,5))

// ES6 arrow function 

let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
}
console.log(multiplyNums())
/**
 * using a single parameter in an arrow function without parens
 * can only be done with one parameter not if 2 or more are introduced
 */
// ES6 arrow function with parameters (single param)
let cubed = num => {
    return num ** 3
}
let powered = (num, power) => {
    return num ** power
}
console.log(cubed(4))
console.log(powered(2,5))

/**
 * JS closure
 * self-invoking function
 * 
 * we're going to wrap everything in a console.log but it does not have to be there
 * --we will just use this to display to the console
 */
console.log((function(name){
    let hello = 'Hello World ' + name;
    return hello
})('Benjamin'))

//JS control flow
/// If Statement
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult Not Retired Yet'
    }else {
        return ' Eldery person - Retired'
    }
}

console.log(determineAge(23))

// JS Tenary Operator
function determine_age(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65)? 'Adult Not Retired' : 'Elderly person - Retired'
}
console.log(determine_age(69))

//Loops in JS -- For loop
//For loop syntax -- for keyword(counter; condition; incremmentation/decrementation)
function countByOne(){
    // for loop
    for (let i = 0; i<20; i++){
        console.log(i)
    }
    return 'counting has stopped'
}
console.log(countByOne())

// while loop
function countwithwhile(){
    let i = 0;
    let text = '';

    while(i < 10){
        text += `this number is ...${i} \n`
        i++
    }
    return text
}

console.log(countwithwhile())

function count_With_do_while(){
    let i = 0;
    let text = ''

    do{
        text +=`This the number currently... ${i} \n`
        i++
    }
    while(i < 10)
    return text 
}
console.log(count_With_do_while())
/**
 * looping with array string methods
 * 
 */
let group_of_names = ['misty' ,'terrel', 'ben']
console.log(group_of_names[1])

let terry,ben,ash
[terry, ben, ash] = group_of_names
console.log(terry, ben, ash)
//method 1 for looping through array
function showallnames(){
    for(let i = 0;i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
}
console.log(showallnames())

// method 2
console.log(group_of_names.forEach(element => console.log(element)))

// JS array method: array.toString()
console.log(group_of_names.toString())

// JS array methods .map(), .filter(), .reduce()

let b_names = group_of_names.map( i =>{
    if( i[0] == 'b' ){
        return i
    }else {
        return false
    }
} )

//Long version of .map(
let b_test_names = function(){
        let test_array = []
        for(let i = 0; i< group_of_names.length; i++){
            if(group_of_names[i][0] == 'b'){
                test_array.push(group_of_names[i])
            }
        }
        return test_array
    }

console.log(b_names)
console.log(b_test_names())

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce((accumulator, current_num)=>{
    return accumulator + current_num
})
console.log(nums_reduced)

//. filter()
let long_names = group_of_names.filter( element => element.length > 4)

console.log(long_names)
//Array methods with Strings values: .join(), .slice(), search(), .splice()
console.log(group_of_names.join(', '))
console.log( group_of_names.slice(0,2))
// .splice() inserts values into list at specific place
let captured_value = group_of_names.splice(0,1, 'Freddie')
console.log(`This was remove based on our splice: ${captured_value}`)
console.log(group_of_names)

function replace_new_names(){
    //for loop to get all the names and replace even indexes
    for(let i= 0; i< group_of_names.length; i++){
        if(i%2 == 0){
            group_of_names.splice(i,1, 'Goku')
        }
    }
    return group_of_names
}
console.log(replace_new_names())
//using .search() and slice on array values that are strings
console.log(group_of_names[0].search('o'))
// string.slice()
console.log(group_of_names[1].slice(0,group_of_names[1].length))