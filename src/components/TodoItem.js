const TodoItem = (props) => {
  const { task, timestamp } = props;

  return (
      <li>
          {task}
          <span className="due">{timestamp}</span>
          <button className="btn btn-sm btn-outline-danger done" type="button">Done</button>
     </li>)
}

export default TodoItem;