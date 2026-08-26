import React from "react";
import './TodoForm.css';

function TodoForm() {
    return(
        <form onSubmit={(event) => { 
            event.preventDefault();
         }}>
            <label>Escribe tu Nuevo TODO</label>
            <textarea placeholder="Ej: preparar desayuno"/>
            <div className="TodoForm-buttonContainer">
            <button type=""
                className="TodoForm-button TodoForm-button--cancel">
                Cancelar
            </button>
            <button 
                className="TodoForm-button TodoForm-button--add">
                Añadir
            </button>
            </div>
        </form>
    );
}

export { TodoForm };