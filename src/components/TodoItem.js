const TodoItem = (props) => {
  const { task, timestamp, remove } = props;

  const renderDateTime = () => {
      if (timestamp) {
          const dateTime = new Date(timestamp);
          return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`
      }
      return '';
  }

  return (
      <li>
          {task}
          <span className="due">{renderDateTime()}</span>
          <button
              className="btn btn-sm btn-outline-danger done"
              type="button"
              onClick={remove}>
              Done
          </button>
     </li>)
}

export default TodoItem;