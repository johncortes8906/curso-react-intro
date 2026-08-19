import React from 'react';
import './createTodoButton.css';

function CreateTodoButton() {
    let [clicks, setClicks] = React.useState(0);
    return(
        <button className="CreateTodoButton" 
            onClick={ (event) => {
            setClicks(clicks++);
            console.log("Le diste Click " +clicks+ " veces");
        }}>
            +
        </button>
    );
}

export { CreateTodoButton }