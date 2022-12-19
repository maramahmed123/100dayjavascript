// var str = "Hello, world!";
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

word.addEventListener("keyup", countVowels);
function countVowels() {
  let count = 0;
  let wordd = word.value.toLowerCase();
  for (let i = 0; i < wordd.length; i++) {
    count++;
  }
  result.innerHTML = `${count}`;
}

// setTimeout(() => {

//   }, 1000);

console.log(count);
