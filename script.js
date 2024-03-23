// let obj={
//     name:abhi,
//     age:23,
//     number:99876909,
// }
// console.log("hello world");

// 

let textarea=document.getElementById("text");
function savetext(){
  localStorage.setItem("autosavetext",textarea.value);
//   console.log(localStorage);
}
if(localStorage.getItem("autosavetext")){
textarea.value=localStorage.getItem("autosavetext");
}
textarea.addEventListener("input",savetext)