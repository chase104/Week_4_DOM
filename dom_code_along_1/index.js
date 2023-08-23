
console.log("hello");

let hideButton = document.getElementById('hideHeaderButton');

console.log(hideButton);
// change styles because I want to
// hideButton.style.fontSize = "40px";

hideButton.addEventListener("click", ()=>{
    console.log("we clicked the hide button!");
})