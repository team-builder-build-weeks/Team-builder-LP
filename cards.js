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