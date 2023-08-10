const inputText = document.getElementById('input_text');
const listContainer = document.getElementById('list_container');

function addTask() {
    if (inputText.value == '') {
        alert('You must write something.');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);

        // create cross icon
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    inputText.value = '';
    saveTasks();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTasks();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTasks();
    }
})


function saveTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}
showTasks();