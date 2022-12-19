const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".btn");

btn.addEventListener("click", copyText);

function copyText(e) {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, 99999);
  document.execCommand("copy");
  btn.textContent = "Copied!!";

  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};
btn.addEventListener("click", copyText);

// function myFunction() {
//     // Get the text field
//     var copyText = document.querySelector(".coupon");

//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices

//      // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);

//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   }
