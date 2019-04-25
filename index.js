// Write your code here!
const main = document.querySelector('main#main');
main.remove();

let element = document.createElement('h1');
element.setAttribute('id', 'victory');
document.body.appendChild(element);
const newHeader = document.getElementById('victory');
newHeader.innerHTML = "YOUR-NAME is the champion"
