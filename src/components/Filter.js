import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/todos/todos-selectors';
import todosActions from '../redux/todos/todos-actions';
import s from './Todolist.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
      Фильтр по названию
    </label>
  );
};

export default Filter;
