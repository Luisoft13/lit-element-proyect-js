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

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    //super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`
      <div class="todo-item">
        <span>${this.item.value}</span>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);
