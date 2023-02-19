import {LitElement, html} from 'lit';
import {style} from './todo-style';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      item: {},
      deleteItem: {},
    };
  }
  static get styles() {
    return [style];
  }

  setStatusCompleted(e) {
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || [];
    const data = {
      status: e.target.checked,
    };

    const list = todoList.find((item) => item.value === this.item.value);
    for (const [key, value] of Object.entries(data)) {
      list[key] = value;
    }

    console.log('list', list);
    localStorage.setItem('litTodoList', JSON.stringify(todoList));
  }

  handleRemoveTodo() {
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || [];
    const list = todoList.findIndex((item) => item.value === this.item.value);
    if (list >= 0) {
      todoList.splice(list, 1);
    }
    localStorage.setItem('litTodoList', JSON.stringify(todoList));
  }

  render() {
    return html`
      <div class="todo-item">
        <span>${this.item.value}</span>
        <div class="todo-actions">
          <input
            type="checkbox"
            @change=${this.setStatusCompleted}
            ?checked=${this.item.status}
          />
          <button color="red" @click="${this.handleRemoveTodo}">
            Delete
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);
