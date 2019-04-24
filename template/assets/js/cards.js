class cardT{
  constructor(arg){
    this.arg = arg;

    //this.data = this.element.dataset.tab;

    //this.item = document.querySelector(`data-tab="${this.data}"`);

    this.arg.addEventListener("click",() => {this.list()});
  }

  list(){
  console.log("hello");


  
  this.arg.classList.toggle("info");
  }
  
}



let cards = document.querySelectorAll(".member");
cards.forEach((sec) => {
  new cardT(sec)
})