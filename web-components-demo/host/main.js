customElements.define(
  "host-demo",
  class extends HTMLElement {
    constructor() {
      super();

      const divElem = document.createElement("div");
      const style = document.createElement("style");

      divElem.textContent = this.getAttribute("text");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(divElem);

      style.textContent = `
          :host { background: red; padding: 2px 5px; display:inline-block;}
          :host-context(h1) { background: green; }
        `;
    }
  }
);
