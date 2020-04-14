import {LitElement} from "lit-element";
import {html} from "lit-html";

class AppComponent extends LitElement {
  render() {
    return html`
      <h1>Vanilla Spa Seed</h1>
      <p>It works!</p>
    `;
  }
}

customElements.define('app-root', AppComponent);
