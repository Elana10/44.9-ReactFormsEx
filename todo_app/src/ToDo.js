import React, { useState } from "react";

const ToDo = ({id, todo, removeToDo}) =>{
    const handleRemove =(e) => {
        const {id} = e.target;
        removeToDo(id)
    }


    return (
        <>
            <li>
                {todo}
            </li>
            <button onClick = {handleRemove} id={id}>Remove</button>        
        </>

    )
}


export default ToDo;