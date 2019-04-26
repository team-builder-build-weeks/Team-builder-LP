const headNav = document.querySelector(".top-n");
headNav.addEventListener("mouseover", event => {
  event.target.style.color= '#bb1333';
})
const titleChange = document.querySelector("h3");
titleChange.addEventListener('mouseover', event => {
    event.target.style.color= '#bb1333';
})
const titleTwo = document.querySelector("h3");
titleTwo.addEventListener('click', event => {
    event.target.style.color= 'hotpink';
})
const titleReturn = document.querySelector("h3");
titleReturn.addEventListener('dblclick', event => {
    event.target.style.color= 'black';
})