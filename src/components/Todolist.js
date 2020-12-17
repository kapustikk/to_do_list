import React from 'react';
import classNames from 'classnames';
import Todo from './Todo';
import s from './Todolist.module.css';

const TodoList = ({ todos, onDeleteTodo, onToogleCompleated }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames(s.todoItem, { 's.completedItem': completed })}
      >
        <Todo
          text={text}
          completed={completed}
          onToogleCompleated={() => onToogleCompleated(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
