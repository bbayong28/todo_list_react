import { useState } from "react";
import styles from "./css/App.module.css";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    console.log(todo);
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === "") {
        return;
        } else {
        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
        }
    };
    const onDelete = (e) => {
        const targetItem = e.target.id;
        setTodos((currentArray) =>
        currentArray.filter((item) => {
            return item !== targetItem;
        })
        );
    };
    console.log(todos);
    return (
        <div className={styles.contianer}>
        <div className={styles.header}>
            <h1>ToDo-List({todos.length})</h1>
        </div>
        <div>
            <form onSubmit={onSubmit}>
            <input
                className={styles.input}
                type="text"
                placeholder="write todo..."
                onChange={onChange}
                value={todo}
            />
            </form>
        </div>
        <div className={styles.listitem}>
            {todos.map((item, index) => (
            <ul className={styles.listul}>
                <li className={styles.listli} key={index}>
                {item}
                <button id={item} onClick={onDelete}>
                    ❌
                </button>
                </li>
            </ul>
            ))}
        </div>
        </div>
    );
}

export default App;
