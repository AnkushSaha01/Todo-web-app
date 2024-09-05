const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];

const getTodoListFromLS =  ()=>{
  return  JSON.parse(localStorage.getItem("todoData")) || [];
}

const addTodoListLocalStorage =(todo)=>{
  return localStorage.setItem("todoData", JSON.stringify(todo));
}

const showTodo =()=>{
  todoListValue = getTodoListFromLS();
  todoListValue.forEach((curTodo)=>{
    const LiElement = document.createElement("li");
    LiElement.innerHTML = curTodo;
    todoLists.append(LiElement);
    const span = document.createElement("span");
    span.innerHTML= "\u00d7";
    LiElement.append(span);
  })
}

const removeTodo = (e) => {
  console.log(e.target)
  console.log(todoListValue)
  let updatedTodoList = todoListValue.filter((curTodoValue) => curTodoValue !== e.target.textContent);
  console.log(updatedTodoList)
}


const addTodoList = (e) => {
  // e.preventDefault();
  todoListValue = getTodoListFromLS() ;
  let newTodo = listValue.value.trim();

  listValue.value ="";

  if(newTodo.length !== 0 && !todoListValue.includes(newTodo)){
    todoListValue.push(newTodo);
    addTodoListLocalStorage(todoListValue);
    const LiElement = document.createElement("li");
    LiElement.innerHTML = newTodo;
    todoLists.append(LiElement);
    const span = document.createElement("span");
    span.innerHTML= "\u00d7";
    LiElement.append(span);

  }
}

showTodo();

document.querySelector(".btn").addEventListener("click", () => {
  addTodoList();
})

function removeItem (e) {
  
  // let todoListValueUp = todoListValue
  // return todoListValueUp;
}




todoLists.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
  removeTodo(e);
}, false);

