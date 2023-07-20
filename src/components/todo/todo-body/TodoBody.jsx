import { AiFillDelete } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";

const TodoBody = ({ todos, removeTodo }) => {
  return (
    <div className="todo-body">
      {todos.map(({ id, title }) => {
        return (
          <div className="todo-body-item" key={id}>
            <h1>{title}</h1>
            <button>
              Edit <BiMessageSquareEdit />
            </button>
            <button
              onClick={() => {
                console.log("delete", id);
                removeTodo(id);
              }}
            >
              Delete <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBody;
