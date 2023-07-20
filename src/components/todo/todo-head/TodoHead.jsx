import { useEffect, useState } from "react";

const TodoHead = ({ setTodos }) => {
  const [value, setValue] = useState("");

  function enterPress(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", enterPress);
    return () => {
      document.removeEventListener("keydown", enterPress);
    };
  });

  function clearInputValue() {
    setValue("");
  }

  function addTodo() {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title: value,
        },
      ];
    });
  }

  return (
    <div className="todo-head">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        // onKeyDown={enterPress}
      />
      <button
        onClick={() => {
          addTodo();
          clearInputValue();
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default TodoHead;
