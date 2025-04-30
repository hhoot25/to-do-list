import{Todo, Project, placeholderProjects} from './classes.js'
import{currentProjName, displayProjectTodos} from './dom.js'




const addTodoBtn = document.querySelector('#addTodoBtn');
const todoDialog = document.querySelector('#todoDialog');
const todoForm = document.querySelector('#todoForm');
const todoConfirmBtn = document.querySelector('#todoConfirmBtn');

//todo form
//open dialog modally
addTodoBtn.addEventListener('click',()=>{
    console.log('pressed');
    todoDialog.showModal();
});

todoConfirmBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    //collect form data
    const formData = new FormData(todoForm);
    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate= formData.get('dueDate');
    const priority= formData.get('priority');

    //create todo object
    const todoObj = new Todo(title,description,dueDate);

    //find which project to put it into
    const project = placeholderProjects.find((element) => element.name == currentProjName);

    project.addTodo(todoObj);

    displayProjectTodos(project.name);

    todoDialog.close(title);

});

todoDialog.addEventListener("close", ()=>{
    console.log(`added ${todoDialog.returnValue}`);
});

