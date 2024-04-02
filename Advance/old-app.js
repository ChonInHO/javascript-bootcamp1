// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-id");

//ADD AN ELEMENT
// 1. creat a new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "Google";

//2. Ger access to thr parent element that should hold the new element
let firstParagraph = document.querySelector("p");

//3.Insert the new wlwmwnt into the parent element content
firstParagraph.append(newAnchorElement);

//REMOVE AN ELEMENT
//1. select the element
let firstH1Element = document.querySelector("h1");
//2.remove it
firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

//MOVE ELEMENT
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML ='Hi! This is <strong> IMPORTANT </strong>'