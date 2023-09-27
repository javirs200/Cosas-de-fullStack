/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        if (element > 0) {
            sum += element
        }
    });
    return sum
}



/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/
function switchItUp(number) {
    let res = ""
    switch (number) {
        case 0:
            res = "Zero"
            break;

        case 1:
            res = "One"
            break;

        case 2:
            res = "Two"
            break;

        case 3:
            res = "Three"
            break;

        case 4:
            res = "Four"
            break;

        case 5:
            res = "Five"
            break;

        case 6:
            res = "Six"
            break;

        case 7:
            res = "Seven"
            break;

        case 8:
            res = "Eight"
            break;

        case 9:
            res = "Nine"
            break;

        default:
            break;
    }
    return res
}


/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
    const ageDifference = Math.abs(dadYearsOld - 2 * sonYearsOld);
    return ageDifference;
}

/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/

function noSpace(x){
    return x.split(' ').join('')
}

/*Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0*/

function sumOfABeach(beachString) {
    // Convert the input string to lowercase
    const lowerCaseString = beachString.toLowerCase();
  
    // Define the target words
    const targetWords = ["sand", "water", "fish", "sun"];
  
    // Initialize a count variable to keep track of the number of occurrences
    let count = 0;
  
    // Iterate through the target words and count their occurrences
    for (const word of targetWords) {
      let startIndex = 0;
      while (startIndex !== -1) {
        // Find the next occurrence of the target word
        startIndex = lowerCaseString.indexOf(word, startIndex);
  
        // If the word is found, increment the count and update the start index
        if (startIndex !== -1) {
          count++;
          startIndex += word.length;
        }
      }
    }
  
    return count;
  }



  /*
  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.*/


function getMiddle(str) {
    const length = str.length;
    
    // Check if the length is odd or even
    if (length % 2 === 0) {
      // If even, return the middle two characters
      const middleIndex = length / 2 - 1;
      return str.slice(middleIndex, middleIndex + 2);
    } else {
      // If odd, return the middle character
      const middleIndex = Math.floor(length / 2);
      return str.charAt(middleIndex);
    }
  }



/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/


function descendingOrder(n) {
    // Convert the integer to a string and split it into an array of digits
    const digits = n.toString().split('');
  
    // Sort the array in descending order
    const sortedDigits = digits.sort((a, b) => b - a);
  
    // Join the sorted digits back into a string and parse it as an integer
    const result = parseInt(sortedDigits.join(''));
  
    return result;
  }
  


window.onload = () => {
    let boton = document.getElementById("accion");

    if (boton != null) {

        boton.onclick = () => {

        }
    }
}
