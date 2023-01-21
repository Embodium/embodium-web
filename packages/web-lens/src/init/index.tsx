import { WebLens } from "../web-lens";
import { handle_event } from "./events";
import { do_registrations } from "../registrations";
import {
  $, component$, useClientEffect$,
  useOnWindow, useStore, createContext, useContextProvider
} from "@builder.io/qwik";

export const weblens_context = createContext("embodium_web-lens");

export const WebLensInit = component$<WebLensInitProps>((props?: WebLensInitProps) => {
  const accessibility_state_store = useStore({ hidden: true });

  useContextProvider(weblens_context, { accessibility: { state_store: accessibility_state_store } });

  useOnWindow('keyup', $((event: Event) => {
    handle_event(accessibility_state_store, event);
  }));

  const onClose$ = $(() => {
    if (!accessibility_state_store?.hidden) {
      accessibility_state_store.hidden = true;
    }
  });

  useClientEffect$(() => {
    do_registrations();
    (globalThis as any)['embodium'] = {
      ...(globalThis as any)['embodium'],
      ['web-lens']: {
        ...(globalThis as any)['embodium']?.['web-lens'],
        toggle_lens: () => {
          accessibility_state_store.hidden = !accessibility_state_store?.hidden;
        }
      }
    }
  });

  return <>
    <web-lens id="web-lens" class={accessibility_state_store.hidden ? "hidden" : ""}>
      {!accessibility_state_store?.hidden &&
        <WebLens onClose$={onClose$} container={props?.container} />}
    </web-lens>
  </>
});

export type WebLensInitProps = {
  readonly container?: Element;
}

