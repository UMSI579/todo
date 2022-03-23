const TodoItem = (props) => {
  const { task, timestamp, remove } = props;

  return (
      <li>
          {task}
          <span className="due">{timestamp}</span>
          <button
              className="btn btn-sm btn-outline-danger done"
              type="button"
              onClick={remove}>
              Done
          </button>
     </li>)
}

export default TodoItem;