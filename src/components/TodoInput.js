import {LitElement, html} from 'lit';
import {style} from './todo-style';

export class TodoInput extends LitElement {
  static get properties() {
    return {
      value: {type: String},
      onInput: {},
      onKeyPress: {},
      handleCreateNewToDoItem: {},
    };
  }
  static get styles() {
    return [style];
  }
  render() {
    return html`
      <div class="todo-input">
        <input
          class="input-class"
          type="text"
          .value=${this.value}
          @input=${this.onInput}
          @keypress=${this.onKeyPress}
        />
        <button class="todo-button" @click=${this.handleCreateNewToDoItem}>
          Add
        </button>
      </div>
    `;
  }
}

customElements.define('todo-input', TodoInput);
