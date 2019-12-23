let button = document.getElementById('enter');
let Input = document.getElementById('userInput');
let uList = document.querySelector('ol');
// let listItem = document.querySelector('li');

function inputLength() {
    return Input.value.length;
}

function createNewEl(){
    let List = document.createElement('li');
    List.appendChild(document.createTextNode(Input.value));
    List.classList.add('list-item') ;
    uList.appendChild(List);
    Input.value = '';

    function toggleListItem(){
        List.classList.toggle('task-done')
    }

    List.addEventListener('click', toggleListItem);
}

function addListClick(){
    if(inputLength() > 0){
        createNewEl();
    }
}

function addListEnter(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createNewEl();
    }
}


button.addEventListener('click', addListClick);

Input.addEventListener('keypress', addListEnter);


