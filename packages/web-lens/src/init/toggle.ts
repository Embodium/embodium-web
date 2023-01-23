import { WebLensStore } from "../web-lens";

export const toggle_lens_accessibility = (lens_store: WebLensStore) => {
    if (lens_store) {

    } lens_store.accessible = !lens_store.accessible;
}
