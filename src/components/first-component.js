import { LitElement, html, css } from "lit";
import './todo-list.js'
import './my-element.js'

export class FirstComponent extends LitElement {
  static properties = {
  };
  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    // TODO: Replace items definition.
    return html`
      <todo-list></todo-list>
      <my-element></my-element>
    `;
  }

}
customElements.define("first-component", FirstComponent);
