class Dropdown{
  constructor(ele){
    this.ele = ele;
    this.button = this.ele.querySelector(".dropdown-button");
    this.content = this.ele.querySelector(".dropdown-content");

    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document
  .querySelectorAll(".dropdown")
  .forEach(dropdown => new Dropdown(dropdown));

const headNav = document.querySelector(".top-n");
headNav.addEventListener("mouseover", event => {
  event.target.style.color= '#bb1333';
})
const headReturn = document.querySelector(".top-n");
headReturn.addEventListener("click", event => {
  event.target.style.color= 'blue';
})
const smallz = document.querySelector(".small");
smallz.addEventListener("mouseover", event => {
  event.target.style.color= 'black';
  event.target.style.backgroundColor= 'white'
})
const smallzChange = document.querySelector(".small");
smallzChange.addEventListener("click", event => {
  event.target.style.color= 'White';
  event.target.style.backgroundColor = 'black';
})
const smallzReturn = document.querySelector(".small");
smallzReturn.addEventListener("dblclick", event => {
  event.target.style.color= 'red';
  event.target.backgroundColor= 'white';
})