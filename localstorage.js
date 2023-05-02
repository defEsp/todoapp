const newForm = document.querySelector("#textform");
const newTextInput = document.querySelector('input[name="textInput"]');
const newlist = document.querySelector('#UL');

window.addEventListener('load', function(){
    if (localStorage.getItem('tasks')) {
        newlist.innerHTML = JSON.parse(localStorage.getItem('tasks'));
    }
});

newForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    const inputValue = (newTextInput.value);
    const newBtn = document.createElement('SPAN');
    newBtn.innerText = 'X';
    newBtn.classList.add('delBut');
    newLi.innerText = newTextInput.value;
    if (inputValue) {
        newLi.appendChild(newBtn);
        newlist.insertBefore(newLi, newlist.childNodes[0]);

        localStorage.setItem('tasks', JSON.stringify(newlist.innerHTML));
        console.log("tasks saved to local storage");

    } else {
        alert('no text');
    }
    newTextInput.value = '';
});

newlist.addEventListener('click', function(e){
    if (e.target.tagName === ('LI')){
        e.target.classList.toggle('checked');
        localStorage.setItem('tasks', JSON.stringify(newlist.innerHTML));
        console.log("marked task saved");
    }
});

newlist.addEventListener('click', function(e){
    if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        localStorage.setItem('tasks', JSON.stringify(newlist.innerHTML));
        console.log("task has been deleted");
    }
});