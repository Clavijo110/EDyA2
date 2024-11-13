import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../store/todoSlice';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleAddTodo = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    return (
        <>
            <h1>Tareas: {todos.length} - <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDeleteTodo} handleToggle={handleToggleTodo} />
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