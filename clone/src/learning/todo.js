import {useState} from "react";

function TodoList() {
    const [toDo, setToDo] = useState("");
    const getChange = (event) => setToDo(event.target.value);
    const [toDos, setToDos] = useState([]);

    const getSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
            }
        setToDos((currentArray) => [toDo, ...currentArray]); // === list(toDo).append(currentArray) <= "..." <<< 리스트 내 요소를 꺼내서 합침
        setToDo(""); // 빈 string으로 보내는 대신 function을 보내서 현재 state로 보낼 수 있음 (바로 위 줄)
        
        };

    return (
        <div>
            <h1> My Todos ({toDos.length}) </h1>
            <form
                onSubmit={getSubmit}>
                <input 
                    type="text" 
                    placeholder="Write your todos..."
                    onChange = {getChange }
                    value = {toDo}
                    />
                <button>Add ToDo</button>
            </form>
            <hr />
            <ul>
            {toDos.map((item, index) => (
                <li key={index}> {item} </li>
            ))}
            </ul>
        </div>
    );
};

export default TodoList;
