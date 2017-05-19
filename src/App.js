import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import store from './reducers/reducers'
import actions from './actions/actions';

export class AddTodoForm extends Component {
  state = {
    message: ''
  };

  onFormSubmit(e) {
    e.preventDefault();
    store.dispatch(actions.addTodo(this.state.message));
    this.setState({ message: '' });
  }

  onMessageChanged(e) {
    var message = e.target.value;
    this.setState({ message: message });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChanged.bind(this)} value={this.state.message} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export class TodoItem extends Component {
  onDeleteClick() {
    store.dispatch(actions.deleteTodo(this.props.index));
  }

  onCompletedClick() {
    store.dispatch(actions.completeTodo(this.props.index));
  }

  render() {
    return (
      <li>
        <a onClick={this.onCompletedClick.bind(this)} style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.message.trim()}</a>
        <a onClick={this.onDeleteClick.bind(this)} style={{ textDecoration: 'none' }}>[x]</a>
      </li>
    );
  }
}

export class TodoList extends Component {
  state = {
    items: []
  };

  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.items
      });
    });
  }

  render() {
    var items = [];

    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
      />);
    });

    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }

    return (
      <ol>{items}</ol>
    );
  }
}


const Comps = {
  AddTodoForm: AddTodoForm,
  TodoList: TodoList
}
export default Comps;

/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/
