import React from 'react';

export const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                onClick={() => handleToggle(todo.id)}
                style={todo.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' } && { cursor: 'pointer' }}
            >
                {todo.description}
            </span>

            <button
                className='btn btn-danger btn-sm'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};