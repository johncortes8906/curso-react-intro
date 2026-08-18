import './todoList.css';

function TodoList({children}) {
  return(
    <ul class="TodoList">
        {children}
    </ul>
  );
}

export { TodoList }