export const handle_event = (state_store: any, event: Event) => {
    if (((event as KeyboardEvent).type ?? "").trim() === "keyup" && ((event as KeyboardEvent).key ?? "").trim() === "Escape") {
        if (!state_store?.hidden) {
            state_store.hidden = true;
        }
    }
}
