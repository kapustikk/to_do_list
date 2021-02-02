import React from 'react-dom';
import s from './Todolist.module.css';
import { ReactComponent as DeleteIcon } from '../icons/remove.svg';
import IconBtn from './IconBtn';

const Todo = ({ text, completed, onToogleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={completed}
        onChange={onToogleCompleted}
      />
      <p className={s.todoText}>{text}</p>
      <IconBtn onClick={onDelete} aria-label="Delete todo">
        <DeleteIcon width="20" height="20" fill="#fff" />
      </IconBtn>
    </>
  );
};

export default Todo;
