const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
// 1. get the text from input
  const taskText = input.value;

  // 2. create a new <li> element
  const newItem = document.createElement('li');

  // 3. set its text to what the user typed
  newItem.textContent = taskText;

  // 4. append it to the list
  list.appendChild(newItem);

  // 5. clear the input box
  input.value = '';

});