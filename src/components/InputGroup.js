import {useState} from "react";
import { dateAndTimeToTimestamp } from '../utils'

const InputGroup = (props) => {
    const { setTodoItems } = props;
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');

    const addTask = () => {
        setTodoItems((currentTodoItems) => {
            const updatedTodoItems =  [
                {
                    task: taskDescription,
                    created: Date.now(),
                    timestamp: dateAndTimeToTimestamp(dueDate, dueTime),
                },
                ...currentTodoItems,
            ];
            localStorage.setItem('my-todo-items', JSON.stringify(updatedTodoItems));
            return updatedTodoItems;
        });
        setTaskDescription('');
        setDueDate('');
        setDueTime('');
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return(
        <div className="input-group">
            <input
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="form-control w-25"
                type="text"
                placeholder="Task Description"
                aria-label="Task Description"
                onKeyDown={keyDownHandler}
            />
            <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
                type="date"
                aria-label="Due Date"
                onKeyDown={keyDownHandler}
            />
            <input
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                className="form-control"
                type="time"
                aria-label="Due Time"
                onKeyDown={keyDownHandler}
            />
            <button
                onClick={addTask}
                className="btn btn-primary"
                aria-label="Add Task">
                Add Task
            </button>
        </div>)
}

export default InputGroup;