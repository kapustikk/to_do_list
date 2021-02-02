import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(todo => todo.id !== payload),
  [actions.toogleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(todo => todo.id !== payload);

//         default:
//             return state;
//     }
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'todos/changeFilter':
//             return payload;

//         default:
//             return state;
//     }
// };
