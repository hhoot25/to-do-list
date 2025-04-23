import "../styles.css";
import {createTodo, Todo} from './create_todos';
import {loopList} from './todo_dom';

const list = [];



console.log("hello world");

createTodo();

const task1 = new Todo("eat food", "eat 5000 calories", "low" );

const task2 = new Todo("clean house", "eat 5000 calories", "high" );

list.push(task1);
list.push(task2);

loopList(list);
loopList(list);
loopList(list);
loopList(list);
