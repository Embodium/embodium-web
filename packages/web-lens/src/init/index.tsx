import { handle_event } from "./events";
import { WebLens, WebLensStore } from "../web-lens";
import { do_registrations } from "../registrations";
import {
  $, component$, useClientEffect$,
  useOnWindow, createContext, useContextProvider, useStore
} from "@builder.io/qwik";
import { LauncherStore } from "../launcher/store";
import { toggle_lens_accessibility } from "./toggle";

export const weblens_context = createContext("embodium_web-lens");

export const WebLensInit = component$<WebLensInitProps>((props?: WebLensInitProps) => {
  const lens_store = useStore<WebLensStore>({
    accessible: false,
    launcher: useStore<LauncherStore>({
      state: 'collapsed'
    })
  });

  useContextProvider(weblens_context, { lens_store });

  useOnWindow('keyup', $((event: Event) => {
    handle_event(event, lens_store);
  }));

  const onClose$ = $(() => {
    if (lens_store) {
      lens_store.accessible = false;
    }
  });

  useClientEffect$(() => {
    do_registrations(lens_store);
  });

  return <>
    <web-lens id="web-lens" class={!lens_store.accessible ? "hidden" : ""}>
      {lens_store.accessible &&
        <WebLens onClose$={onClose$} container={props?.container} />}
    </web-lens>
  </>
});

export type WebLensInitProps = {
  readonly container?: Element;
}

