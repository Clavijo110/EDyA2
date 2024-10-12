import { useReducer } from 'react';
import { TodoReducer } from '../components/TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const useTodo = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (newTodo) => {
        dispatchTodo({
            type: 'add',
            payload: newTodo
        });
    };

    const handleDeleteTodo = (todoId) => {
        dispatchTodo({
            type: 'delete',
            payload: todoId
        });
    };

    const handleToggleTodo = (todoId) => {
        dispatchTodo({
            type: 'toggle',
            payload: todoId
        });
    };

    const countTodos = () => todos.length;

    const countPendingTodos = () => todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    };
};