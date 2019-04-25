class Drop{
  constructor(ele){
    this.ele = ele;
    console.log(ele);
    this.mem = this.ele.querySelector(".member")
    this.tar = this.ele.querySelector(".on-me");

    this.mem.addEventListener("click",() => {this.togg()});
  }
  togg(){
    console.log("mem")
    this.mem.classList.toggle("info");
    this.ele.classList.add("data")
  }
}
let drop = document.querySelectorAll(".member").forEach(sec =>  {
  console.log(sec)
  new Drop(sec)});