const todoKey = "reactTodo";

export function getLocalStorage() {
  const storedTasks = localStorage.getItem(todoKey);
  if (!storedTasks) return []; // Return an empty array if no tasks are stored

  try {
    return JSON.parse(storedTasks); // Attempt to parse the stored tasks
  } catch (e) {
    console.error("Error parsing stored tasks:", e);
    return []; // Return an empty array in case of a parsing error
  }
}

export function setLocalStorage(tasks) {
  try {
    localStorage.setItem(todoKey, JSON.stringify(tasks)); // Store tasks as a JSON string
  } catch (e) {
    console.error("Error saving tasks to localStorage:", e);
  }
}
