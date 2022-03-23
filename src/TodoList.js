import TodoItem from "./components/TodoItem";
import InputGroup from "./components/InputGroup";

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

    return (
        <main className="container">
        <h1 className="row">Things to do (579 In Class)</h1>

        <ul className="row">
            {defaultTodoItems.map((item) =>
                <TodoItem task={item.task} timestamp={item.timestamp} created={item.created} />
            )}
        </ul>
        <section>
            <InputGroup />
        </section>
    </main>);
}

export default TodoList;