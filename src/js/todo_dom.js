

export function loopList(list){

    const main = document.querySelector('#main-content');

    //clear main each time
    main.innerHTML = " ";
    
    list.forEach((obj,index) => {

        console.log('hi');
        const block = document.createElement('div');
        block.classList.add('block');

        //title
        const title = document.createTextNode(obj.title);
        block.appendChild(title);

        main.appendChild(block);
    });


    

}