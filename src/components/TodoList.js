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
  render() {
    return html`
      <ul>
        ${this.list.map((item) => html`<todo-item .item=${item}></todo-item>`)}
      </ul>
    `;
  }
}

customElements.define('todo-list-new', TodoListNew);
