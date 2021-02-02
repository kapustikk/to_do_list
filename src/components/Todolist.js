import React from 'react';
import classNames from 'classnames';
import Todo from './Todo';
import todosActions from '../redux/todos/todos-actions';
import { useSelector, useDispatch } from 'react-redux';
import { filteredTodos } from '../redux/todos/todos-selectors';
import s from './Todolist.module.css';

const TodoList = () => {
  // const todos = useSelector(state => filteredTodos(state.todos.items, state.todos.filter),);
  const todos = useSelector(filteredTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onToogleCompleted = id => dispatch(todosActions.toggleCompleted(id));

  return (
    <ul className={s.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames(s.todoItem, { 's.compleatedItem': completed })}
        >
          <Todo
            text={text}
            completed={completed}
            onToogleCompleted={() => onToogleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default TodoList;

// const mapStateToProps = state => {
//   const { filter, items } = state.todos;
//   const normalizedFilter = filter.toLowerCase();

//   const filteredTodos = items.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );

//   return {
//       todos: filteredTodos,

//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
//   onToogleCompleted: (id) => dispatch(todosActions.toggleCompleted(id)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
