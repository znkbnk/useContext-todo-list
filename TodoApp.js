//TodoApp.js
import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';

const TodoApp = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default TodoApp;
