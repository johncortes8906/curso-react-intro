import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const [newTodo, setNewTodo] = React.useState('');

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu Nuevo TODO</label>
            <textarea 
                placeholder="Ej: preparar desayuno"
                value={newTodo}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button type=""
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button 
                className="TodoForm-button TodoForm-button--add"
            >
                Añadir
            </button>
            </div>
        </form>
    );
}

export { TodoForm };