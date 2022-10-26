// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);


/* 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!
*/
console.log(ages.lastIndexOf(93) - ages[0]);


// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push (33);
console.log(ages);
console.log(ages.lastIndexOf(33));


// 1c. Use a loop to iterate through the array and calculate the average age. 
function average(ages){
    let sum = 0;
    for(let i = 0; i < ages.length; i++){
        sum += ages[i];
    }
    return sum / ages.length;
} 
console.log(average(ages));


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);


// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
/*
function average(names)[
    let average = 0;
    for(i = 0; i < names.length; i++){
        average = 
    }
] console.log(i) */

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 


// 3. How do you access the last element of any array?
console.log(names.lastIndexOf('Bob'));
// check back

// 4. How do you access the first element of any array?
console.log(names[0]);


// 5. Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
/* For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array 
*/



// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array


/* 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of
times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return 'HelloHelloHello')
*/
function repeatWord(word, n){
    let final = ''; 
        for(let i = 0; i < n; i++){
        final += word;
}
    console.log(final);
}
repeatWord("Hello", 3);


// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space
let fullName = (firstName, lastName) => 
    `${firstName} ${lastName}`; 

    console.log(fullName('Briana', 'Flores'));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
/*function theNumbers(array){
    if(array )
}*/

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.


/* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
greater than the average of the elements in the second array */


/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it 
is hot outside and if moneyInPocket is greater than 10.5
*/
function willBuyDrink(isHotOutside, moneyInPocket){
    console.log(isHotOutside && moneyInPocket > 10.50);
} 
willBuyDrink(true, 11);

// 13. Create a function of your own that solves a problem.
//In comments, write what the function does and why you created it.

