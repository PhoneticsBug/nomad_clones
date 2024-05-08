import { useState } from "react";

function TodoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const getChange = (event) => setToDo(event.target.value);

    const getSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [{ id: Date.now(), text: toDo }, ...currentArray]);
        setToDo("");
    };

    const startEdit = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditText("");
    };

    const saveEdit = (id) => {
        setToDos((currentArray) => currentArray.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: editText };
            }
            return todo;
        }));
        setEditingId(null);
        setEditText("");
    };

    const deleteToDo = (id) => {
        setToDos((currentArray) => currentArray.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1 style={{'font-size': '50px', 'margin-bottom': '50px'}}> My Todos ({toDos.length}) </h1>

            <h3> This page will let you add and edit, delete todos. </h3>
            <h3 style={{'margin-bottom':'50px'}}> Refreshing this page will delete all todos since it's not connected to any back-end server. </h3>
            <form onSubmit={getSubmit}>
                <input 
                    className="search-bar"
                    type="text" 
                    placeholder="Write your todos..."
                    onChange={getChange}
                    value={toDo}
                />
                <button className="clickme-btn">Add ToDo</button>
            </form>
            <hr style={{"marginTop":"30px", "marginBottom":"40px"}} />
            <ul>
            {toDos.map((todo) => (
                <div key={todo.id} className="todo-lines">
                    {editingId === todo.id ? (
                        <>
                            <input 
                                className="search-bar"
                                type="text" 
                                value={editText} 
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button className="todo-btns" onClick={() => saveEdit(todo.id)}>save</button>
                            <button className="todo-btns" data-name='delete-cancel' onClick={cancelEdit}>cancel</button>
                        </>
                    ) : (
                        <>
                            <li> {todo.text} </li>
                            <button className="todo-btns" onClick={() => startEdit(todo.id, todo.text)}>edit</button>
                            <button className="todo-btns" data-name='delete-cancel' onClick={() => deleteToDo(todo.id)}>delete</button>
                        </>
                    )}
                </div>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;
