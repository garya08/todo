const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

let todos = [];

function addToDo(text) {
	const todo = {
		text,
		done: false,
		id: `${Math.random()}`
	};


	todos.push(todo);
}

function deleteToDo(id) {
	todos.forEach(todo => {
		if (todo.id === id) {
			todo.done = true;
		}
	})
}


function render() {
	let html = '';

	todos.forEach(todo => {
		if (todo.done) {
			return;
		};

		html += `
			<div>
				${todo.text}
				<button data-id='${todo.id}'>Сделано</button>
			</div>
		`;
	})


	todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {
	const text = inputNode.value;

	addToDo(text);

	render();
});


todosNode.addEventListener('click', (event) => {
	if (event.target.tagName !== 'BUTTON') {
		return;
	}

	const id = event.target.dataset.id;

	deleteToDo(id);

	render();

});

render();