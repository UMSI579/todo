import {useState} from "react";

const InputGroup = (props) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');

    return(
        <div className="input-group">
            <input
                className="form-control w-25"
                type="text"
                placeholder="Task Description"
                aria-label="Task Description" />
            <input
                className="form-control"
                type="date"
                value="2021-10-01"
                aria-label="Due Date"/>
            <input
                className="form-control"
                type="time"
                value="14:30"
                aria-label="Due Time"/>
            <button
                className="btn btn-primary"
                aria-label="Add Task">
                Add Task
            </button>
        </div>)
}

export default InputGroup;