setTimeout(() => {
  customElements.define(
    "defined-demo",
    class extends HTMLElement {
      constructor() {
        super();

        const divElem = document.createElement("div");
        divElem.textContent = this.getAttribute("text");

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(divElem);
      }
    }
  );
}, 2000);
