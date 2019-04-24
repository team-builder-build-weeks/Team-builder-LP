










// class cardT{
//     constructor(arg){
//       this.arg = arg;

//       this.data = this.arg.dataset.tab;

//       this.item = document.querySelector(`[data-tab="${this.data}"]`);

//       this.Nitem = new Second(this.item);

//       this.arg.addEventListener("click",() => {this.list()});
//     }

//     list(){
//     console.log("hello");
//       let card = document.querySelectorAll(".one-me")
    
      
//       card.forEach((sec) =>{
//         sec.classList.remove("data");
//       })
//       this.arg.classList.toggle("data");
//       this.Nitem.list()
//     }
    
//   }
//   class Second{
//     constructor(any){
//       this.element = any
//       console.log("click")
//     }
//     pick(){
//       let cardData = document.querySelectorAll(".info");
      
//       cardData.forEach((sec)=>{
//         sec.classList.remove("data")
//       })
//       this.element.classList.add("data")
//     }

//   }



//   let cards = document.querySelectorAll(".member");
//   cards.forEach((sec) => {
//     new cardT(sec)
//   })