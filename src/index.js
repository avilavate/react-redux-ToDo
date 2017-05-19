import React from 'react';
import ReactDOM from 'react-dom';
import Comps from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
  <div>
    <h1>Todo</h1>
    <Comps.AddTodoForm />
    <Comps.TodoList />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
