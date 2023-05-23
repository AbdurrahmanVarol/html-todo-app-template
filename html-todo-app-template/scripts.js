const toggleCheck = (event) => {
    event.cancelBubble = true
    let classList = event.target.classList
    console.log(classList.contains('checked'))
    if (classList.contains('checked')) {
        event.target.classList.remove('checked')
        event.target.childNodes[1].childNodes[1].innerText = "\xa0\xa0\xa0"
    } else {
        event.target.classList.add('checked')
        event.target.childNodes[1].childNodes[1].innerText = "\u2713"
    }
}
const addTodo = () => {
    let input = document.getElementById('todo')
    let ul = document.getElementById('todoList')
    ul.innerHTML += getListItemAsString(input.value)
    input.value = ''
    changeItemCounter()
}
const getListItemAsString = (value) => {
    return `
            <li class="list-group-item fs-5 d-flex justify-content-between align-items-center"
                onclick="toggleCheck(event)">
                <div class="me-auto">
                    <span class="check-mark badge text-light me-2">&nbsp;&nbsp;&nbsp;</span>
                    ${value}
                </div>
                <button class="close btn badge text-danger float-end" onclick="removeTodo(event)">&#x2715</button>
            </li>
    `
}
const changeItemCounter = () => {
    let childrenCount = document.getElementById('todoList').children.length
    let itemCounter = document.getElementById('itemCounter')
    itemCounter.innerText = `${childrenCount} item${childrenCount > 1 ? 's' : ''} left`
}
const removeTodo = (event) => {
    event.cancelBubble = true
    let li = event.target.parentNode
    let ul = event.target.parentNode.parentNode
    ul.removeChild(li);
    changeItemCounter()
}

const clearAll = () => {
    document.getElementById('todoList').innerHTML = ''
    changeItemCounter()
}

const changeActiveButton = (event) =>{
    let buttons = document.querySelectorAll('.btn-group .btn')
    for(let button of buttons){
        button.classList.remove('active')
    }
    event.target.classList.add('active')
}