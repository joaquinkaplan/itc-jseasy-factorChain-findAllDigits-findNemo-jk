/*
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
*/

//EXPLAINED JK: THE ARGUMENT IS THE ARRAY YOU INCLUDE WHEN YOU CALL THE FUNCTION. CREATE A NEW CONSTANT THAT HOSTS A SET (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set), THAT WILL RETURN TRUE IF IT REACHES TO HOST 10 DIGITS. CREATE A STRING FOR EACH ARRAY ELEMENT, CALLED fourNumbers. SPLIT IT TO MAKE IT A UNIQUE ARRAY, AND EXECUTE forEach METHOD TO ADD A digit (element) TO THE SET CREATED BEFORE. THEN USE AN IF STATEMENT: IF THE SIZE OF THE SET EQUALS TEN, IT WILL RETURN THE fourNumbers WHERE THE SIZE OF THE SET BECAME 10, SUCCESSFULLY FULFILLING THE EXPECTATIONS OF THE EXERCISE.

function findAllDigits(array) {
  const set = new Set();
  for (let fourNumbers of array) {
    String(fourNumbers).split("").forEach((digit) => set.add(digit));
    if (set.size === 10) return fourNumbers;
  }
  return "Missing digits!";
}

findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])
findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810])

exports.solution = findAllDigits;