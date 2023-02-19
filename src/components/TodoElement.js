import {LitElement, html} from 'lit';
import './TodoInput.js';
import './TodoList.js';

import {style} from './todo-style';

export class TodoElement extends LitElement {
  static get properties() {
    return {
      list: {type: Array},
      todo: {state: true},
    };
  }
  static get styles() {
    return [style];
  }
  constructor() {
    super();
    this.list = JSON.parse(localStorage.getItem('litTodoList')) || [];
    this.todo = {
      value: '',
      status: false,
    };
  }

  handleKeyPress(e) {
    if (e.target.value !== '' && e.key === 'Enter') {
      this.handleCreateNewToDoItem();
    }
  }

  handleInput(e) {
    this.todo.value = e.target.value;
  }

  handleCreateNewToDoItem() {
    this.list = JSON.parse(localStorage.getItem('litTodoList')) || [];
    const data = {
      value: this.todo.value,
      status: false,
    };
    this.list.push(data);
    localStorage.setItem('litTodoList', JSON.stringify(this.list));
    this.todo.value = '';
  }

  render() {
    return html`
      <div class="todo-body">
        <h1>😎 Lit Todo 😎</h1>
        <todo-input
          value=${this.todo.value}
          .onInput=${this.handleInput.bind(this)}
          .onKeyPress=${this.handleKeyPress.bind(this)}
          .handleCreateNewToDoItem=${this.handleCreateNewToDoItem.bind(this)}
        ></todo-input>
        <todo-list-new .list=${this.list}></todo-list-new>
      </div>
    `;
  }
}

customElements.define('todo-element', TodoElement);
