

const content = document.querySelector('#content');

export class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

//placeholder project
const defaultProject = new Project("default");
defaultProject.addTodo(new Todo("Task 1", "Description for Task 1", "2023-10-01", "High"));
defaultProject.addTodo(new Todo("Task 2", "Description for Task 2", "2023-10-02", "Low"));

const workProject = new Project("Work");
workProject.addTodo(new Todo("Finish report", "Complete the quarterly report", "2023-10-05", "High"));
workProject.addTodo(new Todo("Team meeting", "Discuss project updates", "2023-10-06", "Medium"));

const personalProject = new Project("Personal");
personalProject.addTodo(new Todo("Grocery shopping", "Buy vegetables and fruits", "2023-10-03", "Low"));
personalProject.addTodo(new Todo("Workout", "Go to the gym for 1 hour", "2023-10-04", "Medium"));

// Export placeholder projects
export const placeholderProjects = [defaultProject, workProject, personalProject];

