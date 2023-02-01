import { toggle_lens } from "../toggle_lens";
import { $, component$ } from "@builder.io/qwik";
import { Close } from "../ui-elements/close";

export const LensCloser = component$(() => {
  return <>
    {/* <svg class="circular-container" onClick$={$(() => toggle_lens())} id="close_e5cd" height="40" width="40">
	<path d="m10.458 31.458-1.916-1.916 9.5-9.542-9.5-9.542 1.916-1.916 9.542 9.5 9.542-9.5 1.916 1.916-9.5 9.542 9.5 9.542-1.916 1.916-9.542-9.5Z" />
	<title>Close Lens</title>
	</svg> */}

    <Close />
  </>
});
