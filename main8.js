const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");


const hideError = () =>{
    setTimeout(()=>{
        error.style.display="none";
    },5000);
}



const calculateError=() => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill =="" || rate =="") {
        error.style.display="block";
        // console.log("please enter num")
        hideError();
    }else if(isNaN(bill)){
        error.innerHTML="please enter a number";
        error.style.display="block";
        hideError();
    }else{
        let tipAmt = bill * rate;
        tipAmt= Math.ceil(tipAmt);
        tip.innerHTML = `tip : $ ${tipAmt}`;
        let totalBill = tipAmt + Number(bill);
        total.innerHTML = `total : $ ${totalBill}`;
    }
};

btn.addEventListener("click",calculateError)
