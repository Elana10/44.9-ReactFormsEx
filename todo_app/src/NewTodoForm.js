import React, {useState} from "react";

const NewTodoForm = ({addToDo}) => {
    const INITIAL_STATE = {
        todo : ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} =e.target;
        setFormData(formData => ({
            ...formData, [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor = "todo">New ToDo: </label>
            <input 
                id = "todo"
                type = "text"
                name = "todo"
                placeholder = "Enter new To Do!"
                value = {formData.todo}
                onChange={handleChange}
            />
            <button>Add Task!</button>
        </form>
    )

}

export default NewTodoForm;