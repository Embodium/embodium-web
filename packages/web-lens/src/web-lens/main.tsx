import { Launcher } from "../launcher";
import { WebLensProps } from "./props";
import { WebLensStore } from "./store";
import compStyles from "./main.scss?inline";
import holyGrailStyles from "../layouts/holy-grail.scss?inline";
import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import { LauncherStore } from "../launcher/store";


export const WebLens = component$<WebLensProps>((props?: WebLensProps) => {
  const lens_store = props?.store ?? useStore<WebLensStore>({
    launcher: useStore<LauncherStore>({ state: 'collapsed' })
  });

  useStyles$(holyGrailStyles);
  useStyles$(compStyles);

  return <>
    <header class="wl-header">
      <Launcher store={lens_store.launcher} />
    </header>
    {lens_store.launcher?.state === 'expanded' &&
      <>
        <nav class="wl-nav"></nav>
        <main class="wl-main"></main>
        <aside class="wl-aside"></aside>
        <footer class="wl-footer"></footer>
      </>
    }
  </>
})


