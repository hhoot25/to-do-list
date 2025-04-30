import {Todo, Project, placeholderProjects} from './classes.js'

const TodoContainer = document.querySelector('#TodoContainer');
const ProjectContainer = document.querySelector('#ProjectContainer');
const bar = document.querySelector('#bar');

export var currentProjName = 'default';



export function displayProjects(){
    placeholderProjects.forEach((project) => {
        const ProjBtn = document.createElement('button');
        ProjBtn.classList.add('project');

        ProjBtn.innerHTML = `${project.name}`;
        
        ProjectContainer.appendChild(ProjBtn);


        //give project button ability to display their todos
        ProjBtn.addEventListener('click', () => {
            displayProjectTodos(project.name);
        })
    });



}


export function displayProjectTodos(projectName){

    TodoContainer.innerHTML = '';

    const project = placeholderProjects.find((element) => element.name == projectName);

    project.todos.forEach((todo) => {
        displayTodo(todo);

    });

    //every time todos clicked variable currentProj is updated
    currentProjName = project.name;

}

export function displayTodo(todo){
    const block = document.createElement('div');
    block.classList.add('todo');

    const title = document.createTextNode(`${todo.title}`);

    const dueDate = document.createTextNode(`${todo.dueDate}`);

    block.appendChild(title);
    block.appendChild(dueDate);

    TodoContainer.appendChild(block);

}