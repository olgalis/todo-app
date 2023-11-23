const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');

theme.addEventListener('click', () => {
    const bodyElement = document.querySelector('body');

    if (theme.checked) {
        bodyElement.classList.remove('theme-dark');
        bodyElement.classList.add('theme-light');
    } else {
        bodyElement.classList.remove('theme-light');
        bodyElement.classList.add('theme-dark');
    }
});

newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && newItemInput.value.trim() !== '') {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

function createNewTodoItem(text) {
    const elem = document.createElement('li');
    elem.innerHTML = `
        <label class="list-item">
            <input type="checkbox" name="todoItem" />
            <span class="checkmark"></span>
            <span class="text">${text}</span>
        </label>
        <span class="remove"></span>`;
    todoList.appendChild(elem);
}
