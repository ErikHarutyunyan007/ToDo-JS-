
let header = document.getElementById('header');
let soundClick = new Audio();
soundClick.src = './audio/click.wav';


let inputOfAdd = document.createElement('input');
inputOfAdd.setAttribute('id', 'inputOfAdd');
inputOfAdd.setAttribute('type', 'text');
header.append(inputOfAdd);

let add = document.createElement('input');
add.setAttribute('type', 'submit');
add.classList.add('add');
header.append(add);
add.disabled = true;
add.style.color = ' rgb(8, 57, 58)';




let listDiv = document.getElementById('listDiv');

let logo = document.createElement('div');
logo.classList.add('logo');
header.append(logo);
logo.innerText = 'To Do List'

inputOfAdd.addEventListener('input', (event) => {
    if (!event.target.value) {
            add.disabled = true;
            add.style.color = ' rgb(8, 57, 58)';
        } else {
        add.disabled = false;
        add.style.color = 'orange';
    };
}); 


add.addEventListener('click', () => {
    if (inputOfAdd.value !== '' && inputOfAdd.value.trim().length > 0) {
        soundClick.play();
        header.style.boxShadow = '0px 0px 50px rgb(255, 255, 255)';
        listDiv.style.boxShadow = '0px 0px 45px rgb(0 255 133)';
        setTimeout(() => {
            header.style.boxShadow = '0px 0px 30px rgb(255, 255, 255)'
            listDiv.style.boxShadow = '0px 0px 30px rgb(255, 255, 255)';
        },300);
        let textoftodo = document.createElement('div');
        textoftodo.classList.add('textoftodo');
        let textoftodo2 = document.createElement('div');
        textoftodo2.classList.add('textoftodo2');
        textoftodo.append(textoftodo2);
        textoftodo2.innerText = inputOfAdd.value;
        textoftodo2.setAttribute('contenteditable', 'false');
        let editItem = document.createElement('img');
        editItem.src = "./photos/edit.png";
        editItem.classList.add('edit');
        editItem.style.cursor = 'pointer';
        textoftodo.append(editItem);
        let removeItem = document.createElement('img');
        removeItem.src = "./photos/delete.png";
        removeItem.classList.add('removeItem');
        removeItem.style.cursor = 'pointer';
        textoftodo.append(removeItem);
        listDiv.append(textoftodo);
        inputOfAdd.value = "";
        removeItem.addEventListener('click', () => {
            soundClick.play();
            header.style.boxShadow = '0px 0px 50px rgb(255, 255, 255)';
            listDiv.style.boxShadow = '0px 0px 45px rgb(255 0 0)';
        setTimeout(() => {
            header.style.boxShadow = '0px 0px 30px rgb(255, 255, 255)';
            listDiv.style.boxShadow = '0px 0px 30px rgb(255, 255, 255)';
        },300);
            removeItem.parentElement.remove();
        });
        let edit = false;
        editItem.addEventListener('click', () => {
            soundClick.play();
            if(edit === false) {
                edit = true;
                editItem.src = './photos/save.png';
                    textoftodo2.contentEditable = true;
            } else {
                edit = false;
                editItem.src = './photos/edit.png';
                textoftodo2.contentEditable = false;
                
            }
        });
    }
});



