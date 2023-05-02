// ===============================
// DIDN'T WANT TO IMPLEMENT LOCALSTORAGE IN THIS ORIGINAL JS CODE IN CASE OF ERRORS
// ===============================

// (USED AS BACK UP I GUESS, IDK HOW LOCALSTORAGE WORKS YET)

// const form = document.querySelector("#textform")
// const textInput = document.querySelector('input[name="textInput"]');
// const list = document.querySelector('#UL');


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newLi = document.createElement('li');
//     const userInput = (textInput.value);
//     const newBtn = document.createElement('SPAN');
//     newBtn.innerText = 'X';
//     newBtn.classList.add('delBut');
//     newLi.innerText = textInput.value;
//     if (userInput) {
//         newLi.appendChild(newBtn);
//         list.insertBefore(newLi, list.childNodes[0]);

//     } else {
//         alert('no text');
//     }
//     textInput.value = '';
// })

// list.addEventListener('click', function(e){
//     if (e.target.tagName === ('LI')){
//         e.target.classList.toggle('checked');
//     }
// })

// list.addEventListener('click', function(e){
//     if (e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove();
//     }
// })

