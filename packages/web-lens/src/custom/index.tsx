import { handler } from "./handler";
import styles from "./main.scss?inline";

export class WebLensWebComponent extends HTMLElement {
  constructor() {
    super();
    handler(this);
  }

  connectedCallback() {
    // console.log("[web-lens]", "connectedCallback");
    const shadowRoot = this.attachShadow({ mode: "closed" });

    const template_node = document.createElement("template");
    template_node.id = "wl-template";
    template_node.innerHTML = `<style>${styles}</style> <slot />`;

    shadowRoot?.append(template_node.content.cloneNode(true));
  }
}
