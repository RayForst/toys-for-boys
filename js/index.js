const template = document.createElement("template");
template.innerHTML = `
<style>
:host {
  padding: 20px;
  background-color: var(--bg);
  color: var(--text);
  display: block;
}
:host:state(hidden) {
  border: none
}
</style>
<slot></slot>
<span>Shadow DOM Text</span>
<button>Shadow Dom Button</button>
`;

class AppDrawer extends HTMLElement {
  static get observedAttributes() {
    return ["state"];
  }

  constructor(...args) {
    super(...args);
    this._internals = this.attachInternals();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener("click", (e) => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  render() {
    // const dateFormated = new Intl.DateTimeFormat("default", {
    //   year: this.getAttribute("year") || undefined,
    //   month: this.getAttribute("month") || undefined,
    //   day: this.getAttribute("day") || undefined,
    //   hour: this.getAttribute("hour") || undefined,
    //   minute: this.getAttribute("minute") || undefined,
    //   second: this.getAttribute("second") || undefined,
    //   timeZoneName: this.getAttribute("time-zone-name") || undefined
    // }).format(new Date());
    // this.insertAdjacentHTML(
    //   "afterend",
    //   `<br> Hello ${this.name} ` + dateFormated
    // );
  }

  get collapsed() {
    return this._internals.states.has("hidden");
  }

  set collapsed(flag) {
    if (flag) {
      // Existence of identifier corresponds to "true"
      this._internals.states.add("hidden");
    } else {
      // Absence of identifier corresponds to "false"
      this._internals.states.delete("hidden");
    }
  }

  get name() {
    return this.getAttribute("data-name");
  }
  // lifecycle hooks
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  toggleDrawer() {
    // ...
  }
}

customElements.define("app-drawer", AppDrawer);

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    // this._internals.states.add("hidden");
  }

  get collapsed() {
    return this._internals.states.has("--active");
  }

  set collapsed(flag) {
    if (flag) {
      // Existence of identifier corresponds to "true"
      this._internals.states.add("--active");
    } else {
      // Absence of identifier corresponds to "false"
      this._internals.states.delete("--active");
    }
  }
}

// Register the custom element
customElements.define("my-custom-element", MyCustomElement);
