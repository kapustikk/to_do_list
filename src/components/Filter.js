import React from 'react';
import s from './Todolist.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    <input
      className={s.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
    Фильтр по названию
  </label>
);

export default Filter;
