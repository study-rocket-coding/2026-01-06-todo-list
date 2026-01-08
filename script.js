// 狀態初始化
let data = [
  { content: "把冰箱發霉的檸檬拿去丟" },
  { content: "打電話叫媽媽匯款給我" },
  { content: "整理電腦資料夾" },
  { content: "繳電費水費瓦斯費" },
  { content: "約vicky禮拜三泡溫泉" },
  { content: "約ada禮拜四吃晚餐" },
];

function renderData() {
  let str = "";
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
  // 找到最接近的 .delete_todo 元素
  const deleteBtn = e.target.closest(".delete_todo");
  
  // 如果沒有找到刪除按鈕就直接中斷
  if (!deleteBtn) return;

  // 只對刪除按鈕阻止預設行為
  e.preventDefault();

  // 彈出確認視窗，存回傳值
  const isConfirmed = confirm("確認刪除代辦事項？");
  
  // 如果使用者按了取消，就直接結束
  if (!isConfirmed) return;

  // 按了確認才刪除
  let num = deleteBtn.getAttribute("data-num");
  data.splice(num, 1);

  renderData();
}

deleteTodo.addEventListener("click", deleteTodoItem);