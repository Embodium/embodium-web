import { Expander } from "./expand";
import { LensCloser } from "./close";
import { Collapser } from "./collapse";
import compStyles from "./main.scss?inline";
import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";

export const Launcher = component$(() => {
  const launcher_store = useStore({ launched: false });

  const change_launched$ = $(() => {
    launcher_store.launched = !launcher_store.launched;
  });
  useStyles$(compStyles);

  return <>
    <div class="wl-launcher">
      {/* Expand Action */}
      {!launcher_store.launched &&
        <Expander onClick$={change_launched$} />}

      {/* Collapse Action */}
      {launcher_store.launched &&
        <Collapser onClick$={change_launched$} />}

      {/* close action */}
      <LensCloser />
    </div>
  </>
});
