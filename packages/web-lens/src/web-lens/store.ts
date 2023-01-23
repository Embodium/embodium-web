import { useStore } from "@builder.io/qwik";
import { LauncherStore } from "../launcher/store";

export type WebLensStore = {
    accessible?: boolean;
    readonly launcher?: LauncherStore;
}

// export const lens_store = useStore<WebLensStore>({
//     accessible: false,
//     launcher: useStore<LauncherStore>({
//         state: 'collapsed'
//     })
// });
