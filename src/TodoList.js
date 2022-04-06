import TodoItem from "./components/TodoItem";
import InputGroup from "./components/InputGroup";
import {useState} from "react";
import bootstrapCss from './css/bootstrap.module.css'
import FilterResults from "./components/FilterResults";
import {defaultTasks} from "./fixtures/defaultTasks";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function TodoList () {
    let defaultTodoItems = defaultTasks;

    // If localStorage is preventing the addition of the expanded defaultTodoItems
    // clear it with `localStorage.clear('my-todo-items')`
    const storedTodoItems = localStorage.getItem('my-todo-items');

    if (storedTodoItems) {
        defaultTodoItems = JSON.parse(storedTodoItems);
    }

    const [todoItems, setTodoItems] = useState(defaultTodoItems);
    const [filterBy, setFilterBy] = useState('');

    return (
        <main className={bootstrapCss.container}>
            <h1 className={bootstrapCss.row}>Things to do (579 In Class)</h1>
            <DefaultTodoItems
              setTodoItems={setTodoItems}
              todoItems={todoItems}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
            />
        </main>)
}

function DefaultTodoItems({setFilterBy, todoItems, setTodoItems, filterBy}) {

    const removeTodoItem = (created) => {
        setTodoItems((previousTodoItems) => {
            // Keep all items that dont match `timestamp`.
            const withItemRemoved = previousTodoItems.filter((item) => {
                return item.created !== created
            });
            localStorage.setItem('my-todo-items', JSON.stringify(withItemRemoved));
            return withItemRemoved;
        });
    }

    const displayTodoListItems = (items) => {
        return items.map((item) =>
          <TodoItem
            task={item.task}
            timestamp={item.timestamp}
            created={item.created}
            key={item.created}
            remove={() => removeTodoItem(item.created)}
          />)
    }

    const displayFilteredTodoListItems = (items) => {
        const filteredItems = items.filter((item) => item.task.includes(filterBy));
        const filteredComponents =  displayTodoListItems(filteredItems);
        if (filteredComponents.length === 0) {
            return `no results for ${filterBy}`
        }
        return filteredComponents;
    }

    return (
      <>
        <div className={bootstrapCss.row}>
            <FilterResults
              setFilterBy={setFilterBy}
            />
        </div>
        <ul className={bootstrapCss.row}>
            {filterBy.length === 0 ? displayTodoListItems(todoItems) : displayFilteredTodoListItems(todoItems)}
        </ul>
        <section>
            <InputGroup setTodoItems={setTodoItems} />
        </section>
      </>);
}

export default TodoList;