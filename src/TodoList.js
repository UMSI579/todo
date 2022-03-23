import TodoItem from "./components/TodoItem";
import InputGroup from "./components/InputGroup";
import {useState} from "react";

function TodoList () {
    const defaultTodoItems = [
        {
            task: 'laundry',
            created: 1647999964830,
        },
        {
            task: 'Drop SI 579',
            timestamp: 1648023475,
            created: 1647999978632,
        }
    ];

    const [todoItems, setTodoItems] = useState(defaultTodoItems);

    const removeTodoItem = (created) => {
        setTodoItems((previousTodoItems) => {
            // Keep all items that dont match `timestamp`.
            const withItemRemoved = previousTodoItems.filter((item) => {
                return item.created !== created
            });
            return withItemRemoved;
        });
    }

    return (
        <main className="container">
        <h1 className="row">Things to do (579 In Class)</h1>

        <ul className="row">
            {todoItems.map((item) =>
                <TodoItem
                    task={item.task}
                    timestamp={item.timestamp}
                    created={item.created}
                    key={item.created}
                    remove={() => removeTodoItem(item.created)}
                />
            )}
        </ul>
        <section>
            <InputGroup setTodoItems={setTodoItems} />
        </section>
    </main>);
}

export default TodoList;