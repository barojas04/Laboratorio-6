import { saveTasks, getTasks as getStoredTasks } from './storage.js';

let tasks = [];

export function initTasks() {
  tasks = getStoredTasks();
}

export function getTasks() {
  return tasks;
}

export function addTask(text) {
  const newTask = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks(tasks);
  }
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
}

export function getPendingCount() {
  return tasks.filter(t => !t.completed).length;
}
