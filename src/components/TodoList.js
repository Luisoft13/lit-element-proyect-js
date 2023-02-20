import {LitElement, html} from 'lit';
import './TodoItem.js';

import {style} from './todo-style';

export class TodoListNew extends LitElement {
  static get properties() {
    return {
      list: {type: Array},
    };
  }
  static get styles() {
    return [style];
  }

  handleChangeTodoStatus(event, todoItem) {
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || [];
    const data = {
      status: event.target.checked,
    };

    const list = todoList.find((item) => item.value === todoItem.value);
    for (const [key, value] of Object.entries(data)) {
      list[key] = value;
    }

    localStorage.setItem('litTodoList', JSON.stringify(todoList));
  }

  handleRemoveTodo(todoItem) {
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || [];
    const todoIndex = todoList.findIndex((item) => item.value === todoItem.value);
    if (todoIndex >= 0) {
      todoList.splice(todoIndex, 1);
    }
    this.list = todoList
    localStorage.setItem('litTodoList', JSON.stringify(todoList));
    this.requestUpdate();
  }

  render() {
    return html`
      <ul>
        ${this.list.map((item) => html`
          <todo-item .item=${item}></todo-item>
          <div class="todo-actions">
            <input
              type="checkbox"
              @change=${(event) => this.handleChangeTodoStatus(event, item)}
              ?checked=${item.status}
            />
            <button color="red"
              @click="${() => this.handleRemoveTodo(item)}"
            >
              Delete
            </button>
          </div>
        `
        )}
      </ul>
    `;
  }
}

customElements.define('todo-list-new', TodoListNew);
