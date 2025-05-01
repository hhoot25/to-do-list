import {Project, Todo, placeholderProjects} from './classes.js'


export function loadArray(){

    if(!localStorage.getItem("array")){
        populateStorage();
    }
    else{
        setArray();
    }
}

export function setArray(){
    const array = JSON.parse(localStorage.getItem("array"));
    
    // Clear the existing placeholderProjects array
    placeholderProjects.length = 0;

    // Reconstruct the projects and todos
    array.forEach((projectData) => {
        const project = new Project(projectData.name);
        projectData.todos.forEach((todoData) => {
            const todo = new Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
            project.addTodo(todo);
        });
        placeholderProjects.push(project);
    });


    console.log("Loaded from localStorage:", placeholderProjects);
}

export function populateStorage(array){

    localStorage.setItem("array", JSON.stringify(placeholderProjects));
    console.log("Saving to localStorage:", placeholderProjects);

    setArray();
}