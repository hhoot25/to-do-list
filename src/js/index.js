import "../styles.css";
import {loopList, Todo, Array} from './dom-to-do';
import {loadBar} from './dom-side-bar';

const task1 = new Todo("eat food", "eat 5000 calories", "low" );

const task2 = new Todo("clean house", "eat 5000 calories", "high" );

Array.push(task1);
Array.push(task2);

loopList();
loadBar();


console.log("hello world");





