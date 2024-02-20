import { validate, getdata, creatRow} from "./function.js";

let name  = document.querySelector('#name');
let button = document.querySelector('#button');
let form = document.querySelector('#tbody')




button && button.addEventListener("click", function(e){
    e.preventDefault();
    const isvalidate = validate('name');


    if (isvalidate) {
       const todo = {
        name: name.value,
        Status: "todo",
        id: Date.now(),
       }
       let todos = getdata();
       todos.push(todo)
       localStorage.setItem('todos', JSON.stringify(todos));
       name.value = '';
    //    window.location.reload();
    let tr = creatRow(todo, todos.length + 1);
    tbody.innerHTML += tr;
    }
})



document.addEventListener('DOMContentLoaded', function () {
    let todos = getdata();
    if (todos.length){
        todos.forEach((todo, index) => {
            let tr = creatRow(todo, index + 1);
            form.innerHTML += tr;
        })
    }

    let deleteBtn = document.querySelectorAll('i.fa-trash-can');
    if (deleteBtn.length) {
        deleteBtn.forEach((del) => {
            del && del.addEventListener('click', function(e){
                e.preventDefault();
               let isDelete = confirm("Rostdanham shu malumotni ochirmoqchimisiz") ;
            //    let id = this.getAtribute("data-id");
            let id = this.getAttribute('data-id');
               if (isDelete && id) {
                todos = todos.filter(todo => {
                    return todo.id != id 
                })
                localStorage.setItem('todos', JSON.stringify(todos));
                window.location.reload();
               }
            })
        })
    }
})