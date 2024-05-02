class AppDrawer extends HTMLElement {
  static get observedAttributes() {
    return ["data-name"];
  }

  render() {
    const dateFormated = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined
    }).format(new Date());

    this.innerHTML = `Hello ${this.name} ` + dateFormated;
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

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener("click", (e) => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  toggleDrawer() {
    // ...
  }
}

customElements.define("app-drawer", AppDrawer);
