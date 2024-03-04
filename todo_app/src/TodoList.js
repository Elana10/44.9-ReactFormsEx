import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import NewTodoForm from "./NewTodoForm";
import ToDo from "./ToDo";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const addToDo = item => {
        let newItem = {...item, id:uuid()};
        setTodoList(todoList => [...todoList, newItem])
    }
    const removeToDo = item => {
        setTodoList(todoList.filter(i => i.id !== item))
    }

    return (
        <>
            <NewTodoForm addToDo = {addToDo}/>
            <ul>
                {todoList.map(({todo, id}) =>
                    <ToDo 
                        key = {id} 
                        id={id} 
                        removeToDo ={removeToDo} 
                        todo = {todo}
                    />
                )}
            </ul>
        </>
    )


}

export default TodoList;