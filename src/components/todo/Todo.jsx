import { useEffect, useState } from "react";
import "./Todo.scss";
import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";
//Images
import dali1 from "../../assets/images/dali1.webp";
import dali2 from "../../assets/images/dali2.jpg";
import dali3 from "../../assets/images/dali3.jpg";

const images = [dali1, dali2, dali3];
let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Learn React" }]);
  const [sliderImg, setSliderImg] = useState(images[count]);

  console.log("rerender");

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       if (count === 2) {
  //         count = 0;
  //       } else {
  //         count++;
  //       }
  //       setSliderImg(images[count]);
  //     }, 1000);

  //     return () => {
  //       clearInterval(id);
  //     };
  //   });

  function removeTodo(id) {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="todo" style={{ backgroundImage: `url(${sliderImg})` }}>
      <TodoHead setTodos={setTodos} />
      <TodoBody todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default Todo;
