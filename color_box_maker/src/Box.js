import React from "react";


const Box = ({color, width, height, id, removeBox}) => {

    const handleRemove = e => {
        const {id} = e.target
        removeBox(id)
    }

    return (
        <>
            <div style ={ {backgroundColor : color, width : `${width}px`, height : `${height}px`}} id={id} key ={id}></div>
            <button onClick ={handleRemove} id={id}>Remove Box</button>
        </>
        )
}


export default Box;