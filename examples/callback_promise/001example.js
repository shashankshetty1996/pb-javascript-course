// callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// TODO app
const todos = [
  {
    id: 1,
    author: "Ashish",
    desc: "Need to go out and grab some food",
  },
  {
    id: 2,
    author: "Yaqub",
    desc: "Listen to music",
  },
];

/* 
    <div id="output">
        <div class="todo">
            <p>{todos.desc}</p>
            <span>{author}</span>
        </div>
    </div>
*/
function renderInUI(data) {
  const output = document.querySelector("#output");

  data.forEach(function (todo) {
    const div = document.createElement("div");
    div.classList.add("todo");

    const p = document.createElement("p");
    const desc = document.createTextNode(todo.desc);
    p.appendChild(desc);
    div.appendChild(p);

    const span = document.createElement("span");
    const author = document.createTextNode(`- ${todo.author}`);
    span.appendChild(author);
    div.appendChild(span);

    output.appendChild(div);
  });
}

// renderInUI(todos);

function renderTodo(data) {
  setTimeout(() => {
    renderInUI(data);
  }, 1000);
}

function addTodo(cb) {
  setTimeout(() => {
    const todo = {
      id: todos.length + 1,
      author: "Rahul",
      desc: "Please say dogs to sleep early and not to make noise",
    };
    todos.push(todo);
    cb(todos);
  }, 2000);
}

// addTodo then and only then UI should render
addTodo(renderTodo);

// addTodo();
// renderTodo(todos);
