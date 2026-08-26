import { TodoContext } from '../TodoContext';
import './todoSearch.css';
import React from 'react';

function TodoSearch() {
    const {
      searchValue, 
      setSearchValue
    } = React.useContext(TodoContext);
    return (
        <input className="TodoSearch" 
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        value={searchValue}
        placeholder="Cortar cebolla" />
    );
}

export { TodoSearch }