const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

//const h1 = document.querySelector('h1');
//h1.addEventListener('mouseover', function() {
//console.log(this.innerText);
//});
const h1 = document.querySelector('h1');
const changeColor = function(evt) {
	h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector('#boxes');
for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}

const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
	console.log('keydown!');
});

input.addEventListener('keyup', function(e) {
	console.log('keyup!');
});

input.addEventListener('keypress', function(e) {
	console.log('keypress!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		//here added a new item to list
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';
	}
});
