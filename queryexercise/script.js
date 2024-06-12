const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const div = document.createElement('div')
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const meToo = document.createElement('p');
meToo.textContent = 'ME TOO!'

container.appendChild(content);
container.insertBefore(p, content)
container.appendChild(h3)
container.appendChild(div)
div.appendChild(h1)
div.appendChild(meToo)

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'grey';
    e.target.style.color = 'white'
  });