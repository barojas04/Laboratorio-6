import './index.css';
import { initTasks, addTask, toggleTask, deleteTask, getTasks, getPendingCount } from './task.js';
import { renderTasks, updatePendingCount, getInputValue, clearInput } from './ui.js';

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

function init() {
  initTasks();
  updateUI();
}

function updateUI() {
  renderTasks(getTasks());
  updatePendingCount(getPendingCount());
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = getInputValue();
  if (text.trim() === '') {
    alert('Por favor, ingresa una tarea válida.');
    clearInput();
    return;
  }
  addTask(text);
  clearInput();
  updateUI();
});

taskList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName !== 'BUTTON') {
    return;
  }
  const li = target.closest('li');
  if (!li) return;
  const taskId = li.dataset.id;
  if (target.classList.contains('delete-btn')) {
    deleteTask(taskId);
    updateUI();
  }
  if (target.classList.contains('toggle-btn')) {
    toggleTask(taskId);
    updateUI();
  }
});

init();
