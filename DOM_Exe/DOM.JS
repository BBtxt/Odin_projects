const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p')
p.classList.add('p')
p.textContent = "Hey I'm Red!"
p.setAttribute('style','color: red')
container.appendChild(p)


// made new container to test querying new classes 
const container2 = document.querySelector('#test-container');

const blue = document.createElement('h3');
blue.classList.add("blue")
blue.textContent = "I am Blue"
blue.setAttribute("style", "color: lightBlue")
container2.appendChild(blue)


// super div with stuff inside of it!!

const div2 = document.createElement('div');
div2.classList.add('superDiv')
div2.style.cssText = "background-color:pink; border: solid"
const heady = document.createElement('h1')
heady.classList.add('superHeader')
heady.textContent = 'I am in a div, DAWG!!!'
heady.setAttribute("style", "color: red")
const superP = document.createElement('p')
superP.classList.add("superP")
superP.textContent = "ME TOOO!!!"
div2.appendChild(heady)
div2.appendChild(superP)
container.appendChild(div2)

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }