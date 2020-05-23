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

// let oldword = document.getElementById("textInput");
// let piggyWord = document.getElementById("showTranslation");

//  buttonClick = () => {
//   piggyWord.value = translatePigLatin(oldword.value)
// }



// window.onload = function () {

//   const pigLatin = (str) => {
//       str = str.toLowerCase().trim();
//       let vowel = ["a", "e", "i", "o", "u"]
//       let vowelPosition = 0;
//       if (vowel.includes(str[0])) {
//           return str + "yay";
//       }
//       else {
//           for (let letter of str) {
//               if (vowel.includes(letter)) {
//                   vowelPosition = str.indexOf(letter)
//                   break
//               }
//           }
//           return str.slice(vowelPosition) + str.slice(0, vowelPosition) + "ay"
//       }
//   }
//   document.getElementById("display-element").onsubmit = function (e) {
//       e.preventDefault()
//       let converted = document.getElementById("showTranslation")
//       converted.innerHTML = pigLatin(document.getElementById("textInput").value);
//   }
// }

const runPigLatin = (str) => {
  str = document.getElementById('textInput').value;
  console.log(str);
  const pigLatin = (word) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let wordArr = word.split('');
    for (let i = 0; i < wordArr.length; i++) {
      if (vowels.includes(wordArr[0])) {
        return word + 'yay';
      }
      if (vowels.includes(wordArr[i])) {
        let firstPart = wordArr.splice(i).join('');
        let secondPart = wordArr.join('') + 'ay';
        return firstPart + secondPart;
      }
    }
  }
  if (str.includes(' ')) {
    let phraseArr = str.split(' ');
    for (let i = 0; i < phraseArr.length; i++) {
      phraseArr[i] = pigLatin(phraseArr[i]);
    }
    document.getElementById("showTranslation").innerHTML = phraseArr.join(' ');
    return phraseArr.join(' ');
  }
  document.getElementById("showTranslation").innerHTML =  pigLatin(str);
  return pigLatin(str);
}
runPigLatin(str)





// const pigLatin = () => {
//   let secondWord = "";
//   let firstWord = "";
//   let oldword = document.getElementById("textInput").value;
//   let vowel = ["a", "e", "i", "o", "u"]
//   oldword = oldword.toLowerCase();
//   oldword = oldword.trim();
//   let oldwordArray = oldword.split("");
//   for(let i=0; i < oldwordArray.length; i++){
//     for (let j = 0; j < vowel.length; j++) {
//     if(oldwordArray[0] === vowel[j])
//     {
//     document.getElementById("showTranslation").innerHTML = oldword + "yay";
//     return oldword + "yay";
//     }
//     else 
//     if (oldwordArray[i] === vowel[j]) {
//       secondWord = oldwordArray.splice(i).join("")
//       firstWord = oldwordArray.join("") + "ay"
//       document.getElementById("showTranslation").innerHTML = secondWord + firstWord
//       return secondWord + firstWord
//     } 
//     }
//   }
// }

// const translatePigLatin = (str) => {
//   str = document.getElementById("textInput").value;
//   console.log(str)
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       oldwordArray = str.split(" ")
//       let pigPhrase = '';
//       for (let j = 0; j < oldwordArray.length; j++) {
//         let oldword = oldwordArray[j];

//         if (j === 0) {
//           pigPhrase = pigPhrase + pigLatin(oldword);
//         }else
//       pigPhrase = pigPhrase + ' ' + pigLatin(oldword)
//       }
//       document.getElementById("showTranslation").innerHTML = pigPhrase
//       return pigPhrase
//     }
//   }
//   document.getElementById("showTranslation").innerHTML = translatePigLatin(str)
//   return translatePigLatin(str)
//   console.log(translatePigLatin(str))
// }

//   let oldwordArray = oldword.split("");
//   for(let i=0; i < oldwordArray.length; i++){
//     for (let j = 0; j < vowel.length; j++) {
//     if(oldwordArray[0] === vowel[j])
//     {
//     document.getElementById("display-element").onsubmit=function (e){
//       e.preventDefault()
//       let converted = document.getElementById("showTranslation")
//     converted.innerHTML = oldword + "yay";
//     return oldword + "yay";
//     }}
//     else 
//     if (oldwordArray[i] === vowel[j]) {
//       secondWord = oldwordArray.splice(i).join("")
//       firstWord = oldwordArray.join("") + "ay"
//       document.getElementById("display-element").onsubmit=function (e){
//         e.preventDefault()
//         let converted = document.getElementById("showTranslation")
//         converted.innerHTML = secondWord + firstWord
//       return secondWord + firstWord
//     }} 
//     }
//   }
// }
//


const resetBoard = () => {
  document.getElementById("showTranslation").innerHTML = null;
  document.getElementById("textInput").value = null;
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