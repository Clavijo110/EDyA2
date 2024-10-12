import React from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    const {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    } = useTodo();

    return (
        <>
            <h1>
                Tareas: {countTodos()} -
                <small> Pendientes: {countPendingTodos()} </small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDeleteTodo} 
                        handleToggle={handleToggleTodo} 
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    );
};