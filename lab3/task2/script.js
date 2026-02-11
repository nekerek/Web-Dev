const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

const createTask = (text) => {
  const li = document.createElement('li');

  const leftDiv = document.createElement('div');
  leftDiv.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.className = 'delete-btn';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed', checkbox.checked);
  });

  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  return li;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  const taskItem = createTask(taskText);
  list.appendChild(taskItem);

  input.value = '';
});
