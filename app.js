var TodoList = (props) => (
  <li>Halil</li>
);


var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));