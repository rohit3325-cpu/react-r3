import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const handleEditToggle = () => {
        if (isEditable) {
            updateTodo(todo.id, { ...todo, todo: todoMsg });
        }
        setIsEditable(!isEditable);
    };

    const handleToggleCompleted = () => {
        toggleComplete(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    const isCompleted = todo.completed;

    return (
        <div
            className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={isCompleted}
                onChange={handleToggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${isCompleted ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditable || isCompleted}
            />
            {/* Edit/Save Button */}
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 ${
                    isCompleted && "cursor-not-allowed opacity-50"
                }`}
                onClick={handleEditToggle}
                disabled={isCompleted}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleDelete}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

