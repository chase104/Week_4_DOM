
console.log("hello");

let arrayOfItems = document.querySelectorAll('.sidebar a');
console.log(arrayOfItems);
// array of those elements

arrayOfItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log("clicked this element!", e.target);
        e.target.classList.add("active")
    })
})