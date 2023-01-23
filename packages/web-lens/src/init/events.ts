import { WebLensStore } from "../web-lens";

export const handle_event = (lens_store: WebLensStore, event: Event) => {
    if (((event as KeyboardEvent).type ?? "").trim() === "keyup" && ((event as KeyboardEvent).key ?? "").trim() === "Escape") {
        console.log('Handling keyup');
        if (lens_store) {
            lens_store.accessible = false;
        }
    }
}
