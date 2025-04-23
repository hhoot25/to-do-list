

const sideBar = document.querySelector("#side-bar");

export function loadBar(){


    const createBtn = document.createElement('button');
    const btnText = document.createTextNode("create new task");
    createBtn.appendChild(btnText);

    sideBar.appendChild(createBtn);





}