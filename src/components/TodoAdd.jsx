import React, { useState } from 'react';

export const TodoAdd = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onInputChange = (event) => {
        setDescription(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description.trim(),
            done: false
        };

        handleAddTodo(newTodo);
        setDescription('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Agregar TODO"
                className="form-control"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
    );
};