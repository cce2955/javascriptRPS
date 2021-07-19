const container = document.querySelector('#domHead');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3");
const buttons = document.querySelectorAll('button');

//Main div
const content = document.createElement('div');

//Content
const redP = document.createElement('p') //Red P
const blueH = document.createElement('h3') //Blue H
const pinkDiv = document.createElement('div') //black border Div with pink background

//Content within pinkDiv
const hInPink = document.createElement('h1');
const pInPink = document.createElement('p');

//Styles
redP.style = "color:red";
blueH.style.color = "blue";
pinkDiv.style.background = "pink";
pinkDiv.style.border = "solid black";

//Text Content
content.classList.add('content');
redP.textContent = "Hey I'm red";
blueH.textContent = "I'm a blue H3"
content.textContent = "Testing";
hInPink.textContent = "I'm in a div";
pInPink.textContent = "me too"

//Display
container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH);
container.appendChild(pinkDiv);
pinkDiv.appendChild(hInPink);
pinkDiv.appendChild(pInPink)

//Button Listener
btn.addEventListener('click', () => {
    alert("Hi from button")
})
//Button Events
btn3.onclick = () => alert("Hi from button 3");

function alertFunction() {
    alert("Hi from alert function (button 2)");
}

buttons.forEach((button) => {
    button.addEventListener('click', () =>
        alert(button.id))
})