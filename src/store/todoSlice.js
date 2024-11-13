import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, description: 'Hacer los challenges', done: false }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        }
    }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;