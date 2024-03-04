import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import {v4 as uuid} from "uuid";

const BoxList = () => {
    const [boxList, setBoxList] = useState([]);
    const addBox = box => {
        let newBox = {...box, id: uuid()};
        setBoxList(boxList => [...boxList, newBox])
    }
    const removeBox = box => {
        setBoxList(boxList.filter(b => b.id !== box))
    }
    return (
        <>
            <NewBoxForm addBox = {addBox}/>
            <div className="BoxContainerDiv" style = {{border : 'black solid 3px', padding : '30px', margin : '30px'} }>
                {boxList.map( box => (
                    <Box 
                        color = {box.color}
                        width = {box.width}
                        height = {box.height}
                        id = {box.id}  
                        removeBox = {removeBox}
                    />
                ))}
            </div>
        </>
    )
}


export default BoxList;