let data = [];

function renderData() {
  let str = "";
  if (data.length === 0) {
  str = `
    <li class="no-data">
      <p>目前尚無代辦事項</p>
    </li>
  `;
  } else {
    data.forEach(function (item, index) {
      str += `
        <li>
          <label class="todoList_label">
            <input class="todoList_input" type="checkbox" value="true">
            <span>${item.content}</span>
          </label>
          <a href="#" class="delete_todo" data-num="${index}">
            <i class="fa fa-times"></i>
          </a>
        </li>
      `;
    });
  }
  const list = document.querySelector(".todoList_item");
  list.innerHTML = str;
}

renderData();

// 新增待辦功能
const text = document.querySelector(".text");
const createTodo = document.querySelector(".create_todo");
function createTodoItem(e) {
  e.preventDefault();

  if (text.value == "") {
    alert("請輸入內容");
    return;
  }

  let obj = {};
  obj.content = text.value;
  data.push(obj);

  renderData();
}

createTodo.addEventListener("click", createTodoItem);

// 刪除待辦功能
const deleteTodo = document.querySelector(".todoList_item");
function deleteTodoItem(e) {
  const deleteBtn = e.target.closest(".delete_todo");
  
  if (!deleteBtn) return;

  e.preventDefault();

  const isConfirmed = confirm("確認刪除代辦事項？");
  
  if (!isConfirmed) return;

  let num = deleteBtn.getAttribute("data-num");
  data.splice(num, 1);

  renderData();
}

deleteTodo.addEventListener("click", deleteTodoItem);