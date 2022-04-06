import bootstrapCss from '../css/bootstrap.module.css'
import customCss from '../css/custom.module.css';
import {useState, useEffect} from "react";

const FilterResults = ({setFilterBy}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilterBy(inputValue);
    }, 500);

    // useEffect can return a "cleanup function". The cleanup
    // runs anytime this useEffect is called again.
    // This allows us to prevent the setFilterBy 👆 call until this useEffect has
    // not been called for 500ms.
    return () => {
      clearTimeout(timeoutId);
    }
  }, [inputValue, setFilterBy])

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