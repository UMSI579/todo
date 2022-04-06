import bootstrapCss from '../css/bootstrap.module.css'
import customCss from '../css/custom.module.css';
import {useState} from "react";

const FilterResults = ({setFilterBy}) => {
  const [inputValue, setInputValue] = useState('');

  const clearButton = () => {
    if (inputValue.length === 0) {
      return '';
    }
    return (
      <button
        onClick={() => setInputValue('')}
        className={`${bootstrapCss['btn-dark']} ${bootstrapCss['btn']} ${bootstrapCss['btn-lg']}`}>
        Clear
      </button>)
  }

  return <div className={`${bootstrapCss['input-group']} ${customCss['filter-container']}`}>
      <input
        className={`${bootstrapCss['form-control']} ${bootstrapCss['form-control-lg']}`}
        type="text"
        placeholder="Filter Todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {clearButton()}
    </div>

  }

export default FilterResults;