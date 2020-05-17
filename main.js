// 'use strict';

// brings in the assert module for unit testing
// const assert = require('assert');
// brings in the readline module to access the command line
// const readline = require('readline');
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// const vowel = ["a", "e", "i", "o", "u"]
// let pigLatin = ""

// const oldword = ""
// let translation = document.getElementById("showTranslation")
// translation.innerHTML = "heyo"

// const oldword = ""



const pigLatin = () => {
  let secondWord = "";
  let firstWord = "";
  let oldword = document.getElementById("textInput").value;
  let vowel = ["a", "e", "i", "o", "u"]
  oldword = oldword.toLowerCase();
  oldword = oldword.trim();
  let oldwordArray = oldword.split("");
  for(let i=0; i < oldwordArray.length; i++){
    for (let j = 0; j < vowel.length; j++) {
    if(oldwordArray[0] === vowel[j])
    {
    document.getElementById("showTranslation").innerHTML = oldword + "yay";
    return oldword + "yay";
    }
    else 
    if (oldwordArray[i] === vowel[j]) {
      secondWord = oldwordArray.splice(i).join("")
      firstWord = oldwordArray.join("") + "ay"
      document.getElementById("showTranslation").innerHTML = secondWord + firstWord
      return secondWord + firstWord
    } 
    }
  }
}

const translatePigLatin = () => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      oldwordArray = str.split(" ")
      let pigPhrase = '';
      // pigPhrase = document.getElementById("textInput").value;
    for (let j = 0; j < oldwordArray.length; j++) {
      let oldword = oldwordArray[j];

      if (j === 0) {
        pigPhrase = pigPhrase + pigLatin(oldword);
        pigPhrase = document.getElementById("textInput").innerText
      } else
      pigPhrase = pigPhrase + ' ' + pigLatin(oldword)
      pigPhrase = document.getElementById("textInput").innerText
    }
    return pigPhrase
    }
  }
 return pigLatin(str)
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.