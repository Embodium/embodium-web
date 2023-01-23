import { Expander } from "./expand";
import { LensCloser } from "./close";
import { Collapser } from "./collapse";
import { LauncherStore } from "./store";
import { LauncherProps } from "./props";
import compStyles from "./main.scss?inline";
import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";

export const Launcher = component$<LauncherProps>((props?: LauncherProps) => {
  const launcher_store = props?.store ?? useStore<LauncherStore>({ state: 'collapsed' });

  const change_launched$ = $(() => {
    launcher_store.state = launcher_store.state === 'collapsed' ? 'expanded' : 'collapsed';;
  });
  useStyles$(compStyles);

  return <>
    <div class="wl-launcher">
      {/* Expand Action */}
      {launcher_store.state === 'collapsed' &&
        <Expander onClick$={change_launched$} />}

      {/* Collapse Action */}
      {launcher_store.state === 'expanded' &&
        <Collapser onClick$={change_launched$} />}

      {/* close action */}
      <LensCloser />
    </div>
  </>
});
