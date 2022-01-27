
//element.appendChild(childElement);

// createElement ('element');
// const bodyDiv = document.createElement('div'); // tells the code what you want to create (div)

// createTextNode ('text content');
// const text = document.createTextNode('a simple body div'); //what text do we want to add (textnode)

// append child
// bodyDiv.appendChild(text); //puts TextNode into the document
// document.body.appendChild(bodyDiv); // tells us that we want it in body, then tells us 

const result = document.getElementById('result');
const first = document.querySelector('.red');

// adding it to result

const heading2 = document.createElement('h2');
const headingText = document. createTextNode('dynamic heading');

heading2.appendChild(headingText);
result.appendChild(heading2);
heading2.classList.add('blue');


// insertBefore('li', 'location') = 'location' means where do you want to put the insertion
//li.1
//
//li.2
//
//li.3

// insertBefore('element', 'location')
//document.body.insertBefore(bodyDiv, result)

//const heading2 = document.createElement('h2');
// const headingText2 = document.createTextNode ('dynamic heading');
// heading2.appendChild(headingText2)
// heading2.classList.add('blue');

//result.insertBefore(heading2, first)


//replaceChild('new', 'old')
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode('I am small text');

// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);

// document.body.replaceChild(smallHeading, result)

// const result = document.querySelector('#result');
// result.removeChild();

// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(list.textContent); // just text content inside of html tags
console.log(list.innerHTML); // you get html content

const ul = document.createElement('ul');
const randomVal = 'random value';

ul.innerHTMl =`
<li>${randomVal}</li>
<li> list item </li>
<li> list item </li>
`
document.body.appendChild(ul);

// CSS
// const random = document.querySelector('.random);
// show example with style (random.style)
// random.classList.add('title');
