import React, { useState } from 'react';

export const TodoAdd = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;

        handleAddTodo({
            id: new Date().getTime(),
            description,
            done: false
        });

        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='form-control'
                placeholder="Nuevo TODO"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className='btn btn-outline-primary mt-1'>
                Agregar
            </button>
        </form>
    );
};