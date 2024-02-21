const body = document.querySelector('body');

//add paragraph element
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";
body.appendChild(p);

//add h3 element
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
body.appendChild(h3);

//add div element
const div = document.createElement('div');
const divH1 = document.createElement('h1');
const divP = document.createElement('p');
div.style.border = "black solid";
div.style.backgroundColor = "pink";
divH1.textContent = "I'm in a div";
divP.textContent = "ME TOO!";
div.appendChild(divH1);
div.appendChild(divP);
body.appendChild(div);

//event listeners
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });