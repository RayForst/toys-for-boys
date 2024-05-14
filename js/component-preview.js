const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
:host h2 {
  margin-top:0;
  margin-bottom: 12px;
}
:host > div {
  margin: 0 0 12px 0;
  padding-right: 24px;
}
::slotted([slot="title"]) {
  color: #1c1c1c;
}
::slotted([slot="component"]) {
  width:100%;
}
</style>
<h2>
  <slot name="title"></slot>
</h2>
<div>
  <slot name="description"></slot>
</div>
<slot name="component" part="component"></slot>
`;

class ComponentPreview extends HTMLElement {
  constructor(...args) {
    super(...args);

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("component-preview", ComponentPreview);
