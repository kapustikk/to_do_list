import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addTodo = createAction('todos/add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});
// const addTodo = (text) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         text,
//         completed: false,
//     },
// });

const deleteTodo = createAction('todos/delete');

// const deleteTodo = todoId => ({
//     type: types.DELETE,
//     payload: todoId,
// });

const changeFilter = createAction('todos/changeFilter');
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

const toggleCompleted = createAction('todos/toggleCompleted');

const todosActions = { addTodo, deleteTodo, changeFilter, toggleCompleted };
export default todosActions;
