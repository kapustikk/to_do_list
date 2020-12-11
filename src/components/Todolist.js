import React from 'react';
import classNames from 'classnames';

import s from './Todolist.module.css';

const TodoList = ({ todos, onDeleteTodo, onToogleCompleated }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames(s.todoItem, { 's.completedItem': completed })}
      >
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToogleCompleated(id)}
        />
        <p className={s.todoText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
