import compStyles from "./main.scss?inline";
import { toggle_lens } from "../toggle_lens";
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
        <svg id="expand_more_e5cf" class="circular-container" onClick$={change_launched$} xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="m20 25.625-10-10 1.958-1.958L20 21.708l8.042-8.041 1.958 2Z" />
        </svg>}

      {/* Collapse Action */}
      {launcher_store.launched &&
        <svg class="circular-container" onClick$={change_launched$} id="expand_less_e5ce" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M11.958 25.625 10 23.667l10-10 10 9.958-1.958 1.958-8.042-8Z" />
        </svg>}

      {/* close action */}
      <svg class="circular-container" onClick$={$(() => toggle_lens())} id="mui_close_e5cd" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
        <path d="m10.458 31.458-1.916-1.916 9.5-9.542-9.5-9.542 1.916-1.916 9.542 9.5 9.542-9.5 1.916 1.916-9.5 9.542 9.5 9.542-1.916 1.916-9.542-9.5Z" />
      </svg>
    </div>
  </>
});
