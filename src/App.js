import React, { Component } from 'react';
import shortid from 'shortid';
import TodoList from './components/Todolist';
import TodoEditor from './components/TodoEditor';
import todo from './components/Todo.json';
import Filter from './components/Filter';

class App extends Component {
  state = {
    todos: todo,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodo = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    const filteredTodos = this.getFilteredTodos();
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filteredTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter),);

    return (
      <>
        <div>
          <p>Общее кол-во дел: {totalTodo}</p>
          <p>Кол-во выполненных дел: {completedTodos}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToogleCompleated={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
