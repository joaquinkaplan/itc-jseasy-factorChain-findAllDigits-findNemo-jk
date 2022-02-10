/*
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
*/

//EXPLAINED JK: 
// - THE ARGUMENT IS THE ARRAY YOU INCLUDE WHEN YOU CALL THE FUNCTION. 
// - MAKE i START AT THE FIRST ELEMENT OF THE ARRAY (=0, BECAUSE JS IS ZERO-BASED), AND EXECUTE i++ WHILE THE LENGTH OF THE ARRAY - 1 IS GREATER THAN i, WHICH MEANS THAT i WILL EMBRACE ALL THE ARRAY, STOPPING WHEN THE FINAL ELEMENT IS REACHED. 
// - AFTER THAT, IF STATEMENT: % MODULUS OPERATOR TO DETERMINE THE FACTOR CHAINING (!=0 || ==0). 
// - RETURN FALSE OR TRUE DEPPENDING ON PREVIOUS OPERATION

function factorChain(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i+1] % array[i] !=0) {
      return false;            
    } else if (array[i+1] % array[i] ==0) {
      return true;
    }
  }
}

factorChain([1, 2, 4, 8, 16, 32])
factorChain([1, 1, 1, 1, 1, 1])
factorChain([2, 4, 6, 7, 12])
factorChain([10, 1])
factorChain([10, 20, 30, 40])
factorChain([10, 20, 40])
factorChain([1, 1, 1, 1, 7, 49])


exports.solution = factorChain;