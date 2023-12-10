const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13 || e.which === 13) {
    // Enter key was pressed
    // Perform your desired action here
    console.log("Enter key pressed");
        e.preventDefault()
    addTodo()
    // For example, you can call a function or submit a form
    // myFunction();
    // document.getElementById("myForm").submit();
  }
});



function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')//to add task
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}



buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)