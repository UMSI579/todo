import {useState} from "react";

const InputGroup = (props) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');

    return(
        <div className="input-group">
            <input
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="form-control w-25"
                type="text"
                placeholder="Task Description"
                aria-label="Task Description" />
            <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
                type="date"
                aria-label="Due Date"/>
            <input
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                className="form-control"
                type="time"
                aria-label="Due Time"/>
            <button
                className="btn btn-primary"
                aria-label="Add Task">
                Add Task
            </button>
        </div>)
}

export default InputGroup;