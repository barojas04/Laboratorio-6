const taskList = document.getElementById('task-list');
const pendingCountSpan = document.getElementById('pending-count');
const taskInput = document.getElementById('task-input');

export function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.innerHTML = `
      <span class="task-text">${escapeHTML(task.text)}</span>
      <div class="actions">
        <button class="toggle-btn" aria-label="Cambiar estado">
          ${task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button class="delete-btn" aria-label="Eliminar tarea">
          Eliminar
        </button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

export function updatePendingCount(count) {
  pendingCountSpan.textContent = count;
}

export function clearInput() {
  taskInput.value = '';
  taskInput.focus();
}

export function getInputValue() {
  return taskInput.value;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
