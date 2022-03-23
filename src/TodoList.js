import TodoItem from "./components/TodoItem";
import InputGroup from "./components/InputGroup";

function TodoList () {
    return (
        <main className="container">
        <h1 className="row">Things to do (579 In Class)</h1>

        <ul className="row">
            <TodoItem task='laundry' />
            <TodoItem task='Drop SI 579' timestamp="1648023475" />
        </ul>
        <section>
            <InputGroup />
        </section>
    </main>);
}

export default TodoList;