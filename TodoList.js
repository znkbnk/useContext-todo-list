//TodoList.js
import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TodoContext);
  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
