import React, { Component } from 'react';
import TodoList from './components/Todolist';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconBtn from './components/IconBtn';
import Stats from './components/Stats';
import { ReactComponent as AddIcon } from './icons/plus.svg';
// import todo from './components/Todo.json';

class App extends Component {
  state = {
    // todos: [],
    // filter: '',
    showModal: false,
  };

  // componentDidMount() {
  //   // console.log('App componentDidMount')

  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('App componentDidUpdate')

  //   if (this.state.todos !== prevState.todos) {
  //     // console.log('Обновилось поле todos');

  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  //   if (
  //     this.state.todos.length > prevState.todos.length &&
  //     prevState.todos.length !== 0
  //   ) {
  //     this.toggleModal();
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(prevState => ({
  //     todos: [todo, ...prevState.todos],
  //   }));
  //   // this.toggleModal();
  //   // или так или как в методе ComponentDidUpdate мы сравниваем длину тудушек
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   console.log(todoId);

  //   this.setState(({ todos }) => ({
  //     todos: todos.map(todo =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  //     ),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getFilteredTodos = () => {
  //   const { filter, todos } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(todo =>
  //     todo.text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodo = todos.length;
    // const completedTodos = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    // const filteredTodos = this.getFilteredTodos();
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filteredTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter),);

    return (
      <div class="main">
        <IconBtn onClick={this.toggleModal} aria-label="Add new todo">
          <AddIcon width="30" height="30" fill="#fff" />
        </IconBtn>
        <Stats />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}

        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
        <Filter />
        <TodoList />
      </div>
    );
  }
}

export default App;
