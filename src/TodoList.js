function TodoList () {
    return (
        <main className="container">
        <h1 className="row">Things to do (579 In Class)</h1>

        <ul className="row"></ul>
        <section>
            <div className="input-group">
                <input className="form-control w-25" type="text" placeholder="Task Description" aria-label="Task Description"/>
                <input className="form-control"  type="date" value="2021-10-01" aria-label="Due Date"/>
                <input className="form-control" type="time"  value="14:30" aria-label="Due Time"/>
                <button className="btn btn-primary" aria-label="Add Task">Add Task</button>
            </div>
        </section>
    </main>);
}

export default TodoList;