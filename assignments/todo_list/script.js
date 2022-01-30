var todobutton = document.querySelector('button');
var inputfield = document.querySelector('input');
var todo = document.querySelector('.todos')
var count = 0;
todobutton.addEventListener("click", additem)
function additem(){
    var newTodo = document.createElement('p')
    newTodo.setAttribute("key",count);
    count = count + 1;
    newTodo.innerHTML = inputfield.value;
    todo.appendChild(newTodo);
    inputfield.value="";
    newTodo.addEventListener("click", deleteitem)
    function deleteitem(){
        todo.removeChild(newTodo)
    }
}