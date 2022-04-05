import {useState} from "react";
import { dateAndTimeToTimestamp } from '../utils'
import bootstrapCss from '../css/bootstrap.module.css'

const InputGroup = (props) => {
    const { setTodoItems } = props;
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [dueTime, setDueTime] = useState('');
    const [dueDateAsNumber, setDueDateAsNumber] = useState('');
    const [dueTimeAsNumber, setDueTimeAsNumber] = useState('');
    console.log('bretsr', bootstrapCss);
    const addTask = () => {
        if (taskDescription) {
            setTodoItems((currentTodoItems) => {
                const updatedTodoItems =  [
                    {
                        task: taskDescription,
                        created: Date.now(),
                        timestamp: dateAndTimeToTimestamp(dueDateAsNumber, dueTimeAsNumber),
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
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const dateTimeUpdater = (e, setRegular, setNumber) => {
        setRegular(e.target.value);
        setNumber(e.target.valueAsNumber);
    };

    return(
        <div className={bootstrapCss['input-group']}>
            <input
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className={`${bootstrapCss['form-control']} ${bootstrapCss['w-25']}`}
                type="text"
                placeholder="Task Description"
                aria-label="Task Description"
                onKeyDown={keyDownHandler}
            />
            <input
                value={dueDate}
                onChange={(e) => dateTimeUpdater(e, setDueDate, setDueDateAsNumber)}
                className={bootstrapCss['form-control']}
                type="date"
                aria-label="Due Date"
                onKeyDown={keyDownHandler}
            />
            <input
                value={dueTime}
                onChange={(e) => dateTimeUpdater(e, setDueTime, setDueTimeAsNumber)}
                className={bootstrapCss['form-control']}
                type="time"
                aria-label="Due Time"
                onKeyDown={keyDownHandler}
            />
            <button
                onClick={addTask}
                className={`${bootstrapCss['btn']} ${bootstrapCss['btn-primary']}`}
                aria-label="Add Task">
                Add Task
            </button>
        </div>)
}

export default InputGroup;