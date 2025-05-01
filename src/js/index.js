import "../styles.css";
import {Card,Projects, placeholderProjects} from "./classes.js"
import {displayProjectTodos, displayProjects} from "./dom.js"
import "./form.js"
import {loadArray ,setArray, populateStorage } from "./storage.js"

loadArray();


displayProjects();


