import React from 'react';

export const TodoItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
                <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}>
                    {todo.description}
                </span>
                <small className={`ml-3 ${todo.done ? 'text-success' : 'text-danger'}`}>
                    {todo.done ? ' - Completada' : ' - Pendiente'}
                </small>
            </div>

            <div>
                <button 
                    className={`btn btn-sm ${todo.done ? 'btn-success' : 'btn-warning'}`} 
                    onClick={() => handleToggle(todo.id)}
                >
                    {todo.done ? 'Reactivar' : 'Completar'}
                </button>

                <button className='btn btn-danger btn-sm ml-2' onClick={() => handleDelete(todo.id)}>
                    Borrar
                </button>
            </div>
        </li>
    );
};