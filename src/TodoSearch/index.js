import './todoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {

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