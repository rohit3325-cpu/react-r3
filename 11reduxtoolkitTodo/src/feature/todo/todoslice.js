import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with a sample todo item
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

// Create a slice of the Redux store for todos
export const todoSlice = createSlice({
    name: "todo", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer to add a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID for the new todo
                text: action.payload // Use the payload as the text of the new todo
            };
            state.todos.push(todo); // Add the new todo to the state
        },
        // Reducer to remove a todo by ID
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Filter out the todo with the matching ID
        },
        // Reducer to update the text of an existing todo
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // Destructure the payload to get id and text
            const todo = state.todos.find((todo) => todo.id === id); // Find the todo item by ID
            if (todo) {
                todo.text = text; // Update the text of the found todo item
            }
        }
    }
});

// Export the actions generated by createSlice
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;