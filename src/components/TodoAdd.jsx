import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export const TodoAdd = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;

        dispatch(addTodo({
            id: new Date().getTime(),
            description,
            done: false
        }));

        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Nuevo TODO"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-primary btn-block">
                Agregar
            </button>
        </form>
    );
};
