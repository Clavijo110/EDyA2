import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <ul className="list-group">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                />
            ))}
        </ul>
    );
};