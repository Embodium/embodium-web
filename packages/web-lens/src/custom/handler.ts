import { toggle_lens } from "../toggle_lens";

export const handler = (eventTarget?: Element) => {

    eventTarget?.addEventListener("toggle_lens", () => {
        toggle_lens();
    });
}
