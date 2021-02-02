import React from 'react';
import { connect } from 'react-redux';
// import s from './Todolist.module.css';

const Stats = ({ total, completed }) => (
  <div>
    <p>
      <span>{total}</span>
      <span>Всего</span>
    </p>
    <p>
      <span>{completed}</span>
      <span>Выполненно</span>
    </p>
  </div>
);

// const totalTodo = todos.length;
// const completedTodos = todos.reduce(
//   (total, todo) => (todo.completed ? total + 1 : total),
//   0,
// );

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: state.todos.items.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  ),
});

export default connect(mapStateToProps)(Stats);
