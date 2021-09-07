import { LitElement, html } from "lit";

export const tagName = "foo-el";

class FooEl extends LitElement {
  static get properties() {
    return {
      count: { attribute: false },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.count++;
    }, 1000);
  }

  render() {
    return html`Hello, World! from lit ${this.count}`;
  }
}
customElements.define(tagName, FooEl);
