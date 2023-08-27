console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // created new array with ages listed above
    console.log(ages);
console.log("A. Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
var firstElement = ages[0]; // create a variable to access the first element of an array 
console.log(ages[ages.length-1] - firstElement); // subtracts the first element of the array from the last element
console.log("B. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(60); // add a new age to the existing array
console.log(ages);  // printing the array to the console with the new element 
console.log(ages[ages.length-1] - firstElement); // subtracting the first element from the last element of the array 
console.log("C. Use a loop to iterate through the array and calculate the average age.");

 function averageAges(ages){ // create a function for the average ages. Takes in array as parameter
    let sum = 0; // create variable for the sum of the numbers in the array 
    for(let i = 0; i < ages.length; i++){ // for loop will iterate through the array & add the numbers together
        sum += ages[i]; // This will add the sum and whatever index we are on in the array
    }
    return sum; // returns the sum of the numbers
} console.log(averageAges(ages) / ages.length) // divides the sum of the numbers in the array by the length 

console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // created new array with names listed above 
console.log(names); // print array of names to the console
console.log("A. Use a loop to iterate through the array and calculate the average number of letters per name.");

function lettersInName(names){ // create function called lettersInName and assign names as a parameter
let totalLetters = 0; // create variable for total number of letters in the array
for(let i = 0; i < names.length; i++){ // for loop to iterate through the array 
    totalLetters += names[i].length; // adds the numbers of letters in the array 
    return totalLetters // returns the total number of letters in the array 
}
} console.log(lettersInName(names)) // print result to the console

console.log("B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.")
for (let i = 0; i < names; i++){ // iterates through the array 
} console.log(names.join(' ')) // concatenates the names and spaces them 


console.log("3. How do you access the last element of any array?"); 
console.log("To access the last element of an array you would use array.length-1"); 
console.log("4. How do you access the first element of any array?");
console.log("Create a variable and assign it to the value of array.[0] and indicate in the [] which element you are accessing.");

console.log(`5. Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);

let nameLengths = [3, 5, 3, 5, 4, 3]; // creating new array called nameLengths with the lengths of the names in the previous array called names
for(let i = 0; i < names.length; i++){  // for loop to iterate through the names array 
} console.log(names.concat(nameLengths)) // use .concat to concatenate the 2 arrays 

console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.")

function sumOfLength(nameLengths){ // create a function for the sum of the numbers. Takes in array as parameter
    let sum = 0; // create variable for the sum of the numbers in the array 
    for(let i = 0; i < names.length; i++){ // for loop will iterate through the array & add the numbers together
        sum += nameLengths[i]; // This will add the sum and which index we are on in the array
    }
    return sum; // returns the sum of the numbers
} console.log(sumOfLength(nameLengths)) // prints the sum of the numbers in the array to the console

console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return
'HelloHelloHello').`);

function repeatGreeting(word, n){ // create function w/ 2 params
   let result = ""; // create variable for the result 
   for (let i = 0; i < n; i++){ // for loop to repeat the word
    result += word; // add result variable and the word 
   }
 return result // return the result 
}
console.log(repeatGreeting("Hello", 3)) // print outcome to the console

   
   

 console.log(`8. Write a function that takes two parameters, firstName and lastName, 
 and returns a full name. The full name should be the first and the last name separated by a space.`)

function createFullName(firstName, lastName){ // create a function that takes 2 params
    return firstName + " " + lastName; // return first & last name w/ space 
} let fullName = createFullName("Danielle", "Tatro"); // create variable for fullName
console.log(fullName) // print full name to the console 

console.log(`9. Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100.`);
function numberArray(numbers){ // create function that takes in the ages array from earlier 
    let sum = 0; // create variable for the sum of the numbers 
    for (let i = 0; i < numbers.length; i++){ // for loop to iterate through the array 
        sum += numbers[i]; // sum variable + numbers 
    }
    return sum > 100; // returns true if the sum is greater than 100 
    
} console.log(numberArray(ages)) // print function that takes in ages array from earlier 

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function arrayElements(numbers){ // create a function that takes in numbers as a param 
    let sum = 0; // create variable for the sum 
    for(i = 0; i < numbers.length; i++){ // for loop to iterate through the array 
        sum += ages[i] // sum plus ages 
    }
    return sum / ages.length // return the sum divided by the length of the ages array from earlier 
} 
console.log(arrayElements(ages)) // print to console 

console.log(`11. Write a function that takes two arrays of numbers and returns true if the average
 of the elements in the first array is greater than the average of the elements in the second array.`);
 let array1 = [65, 2, 12, 19, 42] // create array1 
let array2 = [16, 54, 0, 3, 5] // create array2 
function returnTrue(array1, array2){ // create function that takes in array 1 and array 2 
    
for (let i = 0; i < array1; i++){ // for loop to iterate through the array 
    array1 += array2[i] // adds value to array1 & array 2 
 } return array1 > array2; // return true if array1 is greater than array2 
}
 console.log(returnTrue(array1, array2)) // print result to the console

 console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
 function willBuyDrink(isHotOutside, moneyInPocket){ // create function 
    return isHotOutside && moneyInPocket > 10.50 // returns true if both isHotOutside and moneyInPocket are true
   
 } console.log(willBuyDrink(true, 18.00)) // print result to the console

 console.log(`13. Create a function of your own that solves a problem. 
 In comments, write what the function does and why you created it.`)

 function homeworkDone(time, patience){ // create a function for if I will get my homework done
return time && patience // return true if both are true
 } console.log(homeworkDone(true, false)) // returns false because I have no patience 
    
