const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const todo_list = document.querySelector("#tasks");
const todo_alert = document.querySelector("#alert");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const task = input.value;
    if(input.value == ''){
        todo_alert.style.display = 'block';
        return 0;
    }

    todo_alert.style.display = 'none';

    const todo_task = document.createElement('div');
    todo_task.classList.add('task');

    const todo_task_content = document.createElement('div');
    todo_task_content.classList.add('content');

    todo_task.appendChild(todo_task_content);

    const todo_task_input = document.createElement('input');
    todo_task_input.classList.add('text');
    todo_task_input.type = 'text';
    todo_task_input.value = task;
    todo_task_input.setAttribute('readonly', 'readonly');

    todo_task_content.appendChild(todo_task_input);

    const todo_task_actions = document.createElement('div');
    todo_task_actions.classList.add('actions');

    const task_complete = document.createElement('button')
    task_complete.classList.add("complete")
    task_complete.innerText = "complete";
    
    const todo_task_edit = document.createElement('button');
    todo_task_edit.classList.add('edit');
    todo_task_edit.innerText = 'Edit';

    const todo_task_delete = document.createElement('button');
    todo_task_delete.classList.add('delete');
    todo_task_delete.innerText = 'Delete';
    
    todo_task_actions.appendChild(task_complete);
    todo_task_actions.appendChild(todo_task_edit);
    todo_task_actions.appendChild(todo_task_delete);

    todo_task.appendChild(todo_task_actions);

    todo_list.appendChild(todo_task);

    input.value = '';

    task_complete.addEventListener('click',()=>{
        todo_task.style.backgroundColor = 'rgb(79 144 79)';
        todo_task_input.style.textDecoration = "line-through";
        
        todo_task_actions.removeChild(todo_task_delete);
        todo_task_actions.removeChild(todo_task_edit);
        task_complete.innerText = "Completed";
        task_complete.style.color = '#0919ae'

    })

    todo_task_edit.addEventListener('click', () => {
        if (todo_task_edit.innerText.toLowerCase() == "edit") {
            todo_task_edit.innerText = "Save";
            todo_task_input.removeAttribute("readonly");
            todo_task_input.focus();
        } else {
            todo_task_edit.innerText = "Edit";
            todo_task_input.setAttribute("readonly", "readonly");
        }
    });

    todo_task_delete.addEventListener('click', () => {
        todo_list.removeChild(todo_task);
    });
});
