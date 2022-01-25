// DOM - Document Object Model
// document.body.style.backgroundColor = ""; // example
// document.body.style.color = "yellow";
// document.getElementById("btn").style.color = "pink";
 
// assign to a variable
 
// let button = document.getElementById("btn");
// button.style.color = "white";
// console.log(button);
 
// window object - this is where we are getting stuff from "document."
// console.log(window);
 
// returns a node object or a node list, which is an array like object (some methods we
// can use like on array)
 
// const btn = document.getElementById("btn");
// const bname = btn.nodeName;
// const css = btn.style;
 
// console.log(btn);
// console.log(css);
// console.log(bname);
 
// select the element or group of elements that we want
// decide what effects we want to apply to the selection
 
// getElementById("element"); // css id from html
// const title = document.getElementById("title");
// title.style.color = "darkorange";
 
// btn.style.backgroundColor = "orange";
 
// getElementsByTagName("tagname");
// node list = array-like object
// index, length property but not array methods
 
// let h1 = document.getElementsByTagName("h1");
 
// h1[0].style.color = "orange";
 
const items = document.getElementsByTagName("li");
 
// fruits[0].style.color = "red";
// fruits[1].style.color = "purple";
// fruits[2].style.color = "green";
// fruits[3].style.color = "orange";
 
const betterItems = [...items]; // spread operator - copies items and saving them as betterItems
 
betterItems.forEach(function (i) {
  // anonymous function
  console.log(i);
});
