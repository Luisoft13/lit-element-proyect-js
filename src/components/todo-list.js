import { LitElement, html, css } from "lit";

export class ToDoList extends LitElement {
  static properties = {
    _listItems: { state: true },
    hideCompleted: {}
  };
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();
    this._listItems = [
      { text: "Make to-do list", completed: true },
      { text: "Complete Lit tutorial", completed: false }
    ];
    this.hideCompleted = false;
  }

  render() {
    // TODO: Replace items definition.
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    const todos = html`
      <ul>
        ${items.map(
          (item) => html` <li
            class=${item.completed ? "completed" : ""}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>`
        )}
      </ul>
    `;

    const message = html` <div>Todo List is completed</div> `;

    const content = items.length > 0 ? todos : message;
    // TODO: Define partial templates.
    return html`
      <h2>To Do</h2>
      ${content}
      <input
        id="newitem"
        aria-label="New item"
        ?disabled=${this.hideCompleted}
      />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  get input() {
    return this.renderRoot?.querySelector("#newitem") ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false }
    ];
    this.input.value = "";
  }
}
customElements.define("todo-list", ToDoList);
