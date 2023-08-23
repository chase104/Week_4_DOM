const header = document.querySelector('header');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


console.log("hello");

let hideButton = document.getElementById('hideHeaderButton');

console.log(hideButton);
// change styles because I want to
// hideButton.style.fontSize = "40px";

hideButton.addEventListener("click", ()=>{
    // select the header
   
    console.log(header);
    // hide the header
    // 1.  hidden attribute
    // header.hidden = true;
    // 2. I could make a "hide" class (add to classlist)
    header.classList.add('hide');
    // 3. I could style.display = "none";
    // header.style.display = "none";
})

let showButton = document.getElementById("showHeaderButton");

showButton.addEventListener('click', () => {
    header.classList.remove('hide');
})


const signupForm = document.getElementById("signup-form")


signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("the form is submitting");
})

const resetButton = document.getElementById('reset-button')
console.log(resetButton);

resetButton.addEventListener('click', ()=>{
    console.log(nameInput.value);
    nameInput.value = ""
    emailInput.value = ""
})