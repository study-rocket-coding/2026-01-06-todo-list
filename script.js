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
  data.forEach(function (item) {
    str += `
      <li>
        <label class="todoList_label">
          <input class="todoList_input" type="checkbox" value="true">
          <span>${item.content}</span>
        </label>
        <a href="#">
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