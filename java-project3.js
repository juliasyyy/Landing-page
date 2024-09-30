document.querySelector("header").style.backgroundColor ="black"; 

console.log(document.querySelectorAll(".description-1")); 
document.querySelectorAll(".description-1")[0].style.border="1px solid black";
document.querySelectorAll(".description-1")[1].style.border="1px solid black";
document.querySelectorAll(".description-1")[2].style.border="1px solid black";
document.querySelectorAll(".description-1")[3].style.border="1px solid black";
document.querySelectorAll(".description-1")[4].style.border="1px solid black";
document.querySelectorAll(".description-1")[5].style.border="1px solid black";


document.querySelector(".shop").innerHTML = "SHOP";

let submit = document.getElementById("submit"); 
// creating a new div
let newDiv = document.createElement("div"); 
// creating a new button
let newButton = document.createElement("button"); 
newButton.textContent = "PROCEED TO CHECK OUT"; 
newButton.style.color = "white"; 
newButton.style.border = "1px black"; 
newButton.style.margin = "10px 10px 10px 0px"; 
newButton.style.padding = "5px 15px ";
newButton.style.backgroundColor = "black";
newButton.style.fontFamily= "helvetica";
newButton.style.fontSize= "20px";

submit.appendChild(newDiv); 
newDiv.appendChild(newButton);


function checkOut(){
    alert("Would you like to continue shopping?"); 
}

//first parameter - action enclosed in quotation marks 
//second parameter - declared function 

newButton.addEventListener('click', checkOut);