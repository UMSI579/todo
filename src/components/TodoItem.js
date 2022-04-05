import bootstrapCss from '../css/bootstrap.module.css'

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
          <span className={bootstrapCss.due}>{renderDateTime()}</span>
          <button
              className={`${bootstrapCss.btn} ${bootstrapCss['btn-sm']} ${bootstrapCss['btn-outline-danger']} ${bootstrapCss.done}`}
              type="button"
              onClick={remove}>
              Done
          </button>
     </li>)
}

export default TodoItem;