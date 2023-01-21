import { WebLensWebComponent } from "./custom";

export const register_custom = <TElement extends CustomElementConstructor>(comp_name: string, comp_type: TElement) => {
    const tag_name = (comp_name ?? "").trim();
    if (tag_name && comp_type) {
        if (!customElements.get(tag_name)) {
            customElements.define(tag_name, comp_type);
        }
    }
}

export const do_registrations = () => {
    register_custom("web-lens", WebLensWebComponent);
}
