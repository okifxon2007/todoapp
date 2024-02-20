
function validate(name) {
    if (!name.value) {
        
    }
    return true
}


function getdata(){
    let data = [];
    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'));
    }
    return data;
}

function creatRow (todo, index){
    return `
    <div class="rb">
    <p>${index}</p>
    <p>${todo.name}</p>
    <button>${todo.Status}</button>
    <i class="fa-solid fa-pencil"></i>
    <i data-id = ${todo.id} class="fa-solid fa-trash-can"></i>
    </div>

    `
}
export {validate, getdata, creatRow} 
