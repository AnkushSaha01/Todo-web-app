const todoValue = document.getElementById("todoValue");
const todoLists = document.getElementById("todoLists");


function addTodo(){
  if(todoValue.value === ''){
    alert("Todo cannot be empty!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = todoValue.value;
    todoLists.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.append(span);
  }
  todoValue.value = "";
  saveTodo();
}

todoLists.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveTodo();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveTodo();
  }
}, false);


function saveTodo(){
  localStorage.setItem("todoData", todoLists.innerHTML)
}


function showTodo(){
  todoLists.innerHTML = localStorage.getItem("todoData");
}

showTodo();

