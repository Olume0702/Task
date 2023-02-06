'use strict'
const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#newTaskInput');
const listElement = document.querySelector('#tasks');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(input.value);
    const task = input.value
    if (task ==='') {
        alert('input field must not be empty')
        const taskElement = document.createElement('div')
    taskElement.classList.add('task')
    const Elementremove =taskElement.remove()
    return Elementremove
        
    }else{
        console.log('success');
    }
// creating divs and input fields
// creating div with the class of task
const taskElement = document.createElement('div')
taskElement.classList.add('task')
   
    // creating div with the class of content
    const taskContentElement =document.createElement('div')
    taskContentElement.classList.add('content')
    //creating and input field with a class of text
    const taskInputElement = document.createElement('input')
    taskInputElement.classList.add('text')
    taskInputElement.type='text'
    taskInputElement.value=task
    taskInputElement.setAttribute('readonly','readonly')
//lets append input to the div of content using appendChild() method
taskContentElement.appendChild(taskInputElement)
// creating the delete and edit btn
const taskActionElement = document.createElement('div')
taskActionElement.classList.add('actions')




const taskEditElement = document.createElement('button')
taskEditElement.classList.add('edit')
taskEditElement.innerText='Edit'

//Delete btn
const taskDeleteElement = document.createElement('button')
taskDeleteElement.classList.add('delete')
taskDeleteElement.innerText='Delete'

// let appends edit and edit button to the div of action using appenChild() method

taskActionElement.appendChild(taskEditElement)
taskActionElement.appendChild(taskDeleteElement)

//
taskElement.appendChild(taskContentElement)
taskElement.appendChild(taskActionElement)
listElement.appendChild(taskElement)
input.value = ''
taskEditElement.addEventListener('click',()=>{
    if (taskEditElement.innerText==='edit') {
        taskInputElement.removeAttribute('readonly')
        taskEditElement.innerText = 'save'
    }else{
        taskInputElement.setAttribute('readonly','readonly')
        taskEditElement.innerText='edit'
    }
})

taskDeleteElement.addEventListener('click',function () {
    listElement.removeChild(taskElement)
    
})

})
 