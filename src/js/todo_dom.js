

export function loopList(list){

    const main = document.querySelector('#main-content');
    
    list.forEach((obj,index) => {

        console.log('hi');
        const block = document.createElement('div');
        block.classList.add('block');

        main.appendChild(block);
    });


    

}