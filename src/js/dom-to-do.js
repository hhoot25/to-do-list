
export const Array = [];

export class Todo{
    constructor(title, description, priority){
        this.title = title;
        this.description = description;
        this.priority = priority;


    }
}

export function loopList(){

    const main = document.querySelector('#main-content');

    //clear main each time
    main.innerHTML = " ";
    
    Array.forEach((obj,index) => {

        console.log('hi');
        const block = document.createElement('div');
        block.classList.add('block');

        //title
        const title = document.createTextNode(`Title: ${obj.title}`);
        block.appendChild(title);

        //add priority
        const priority = document.createTextNode(`Priority : ${obj.priority}`);
        block.appendChild(priority);



        main.appendChild(block);
    });  

}


