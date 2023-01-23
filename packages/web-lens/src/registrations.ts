import { WebLensStore } from "./web-lens";
import { WebLensWebComponent } from "./custom";
import { toggle_lens_accessibility } from "./init/toggle";

export const register_custom = <TElement extends CustomElementConstructor>(comp_name: string, comp_type: TElement) => {
    const tag_name = (comp_name ?? "").trim();
    if (tag_name && comp_type) {
        if (!customElements.get(tag_name)) {
            customElements.define(tag_name, comp_type);
        }
    }
}

export const do_registrations = (lens_store: WebLensStore) => {

    (globalThis as any)['embodium'] = {
        ...(globalThis as any)['embodium'],
        ['web-lens']: {
            ...(globalThis as any)['embodium']?.['web-lens'],
            toggle_lens: () => {
                // lens_store.accessible = !lens_store.accessible;
                toggle_lens_accessibility(lens_store);
            }
        }
    }

    // Custom Element Registrations
    register_custom("web-lens", WebLensWebComponent);
}
