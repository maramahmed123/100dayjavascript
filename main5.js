const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");

btn.addEventListener("click", countVowels);

// program to count the number of vowels in a string

// defining vowels
// const vowels = ["a", "e", "i", "o", "u"]

function countVowels() {
  // initialize count
  let count = 0;
  let wordd = word.value.toLowerCase();

  // loop through string to test if each character is a vowel
  for (let i = 0; i < wordd.length; i++) {
    let letter = wordd[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      count++;
    }
  }
  result.innerHTML = `${count} vowels`;
//   result.innerHTML = count;
}
