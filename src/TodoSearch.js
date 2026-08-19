import './todoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
    
    console.log("Los usuarios buscan TODOs de: " +searchValue);
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