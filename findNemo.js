/*
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return for the first one.
*/

//EXPLAINED JK: CREATE A FUNCTION, THE ARGUMENT IS THE STRING YOU INCLUDE WHEN YOU CALL THE FUNCTION. 
// - INSIDE THE FUNCTION: CREATE A VARIABLE CALLED positionNemo 
// - USE THE split METHOD TO TURN THE STRING INTO AN ARRAY 
// - USE indexOf METHOD TO FIND WHERE IN THE ARRAY IS LOCATED THE WORD 'NEMO', IF IT IS. 
// - ADD 1 BECAUSE JS IS ZERO-BASED, SO IN THE RESULT THE CORRECT POSITION NUMBER IS SHOWN. 
// - NEXT, IF STATEMENT TO RETURN THE ASKED SENTENCE IF positionNemo IS TRUE (IF THE WORD 'NEMO' APPEARS ANYWHERE IN THE ARRAY), OR RETURN "I can´t find Nemo :( IF THE WORD DOESN'T APPEAR IN THE ARRAY."

function findNemo(string) {
  let positionNemo = string.split(" ").indexOf('Nemo') + 1;
   if(positionNemo) {return `I found Nemo at ${positionNemo}!`} 
else{
    return "I can't find Nemo :("}
  }




findNemo("I am Ne mo Nemo !")
findNemo("N e m o is NEMO NeMo Nemo !")
findNemo("I am Nemo's dad Nemo senior .")
findNemo("Oh, hello !")
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")
findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!")

exports.solution = findNemo;