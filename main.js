// const sub = document.querySelector(".subtract");
// const add = document.querySelector(".add");
// const resetcount = document.querySelector(".reset");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e) =>{
    if(e.target.classList=="add"){
        count.innerHTML++
        setColor();
    }
    if(e.target.classList=="reset"){
        count.innerHTML=0;
        setColor();
    }
    if(e.target.classList=="subtract"){
        count.innerHTML--
        setColor();
    }
})

function setColor() {
    if(count.innerHTML>0){
        count.style.color= "yellow";
    } else if (count.innerHTML<0){
        count.style.color= "orangered";
    }else{
        count.style.color= "#fff";
    }
}


// add.addEventListener("click",() =>{
//     count.innerHTML++
// });
// sub.addEventListener("click",() =>{
//     count.innerHTML--
// });
// resetcount.addEventListener("click",() =>{
//     count.innerHTML=0;
// })