import { toggle_lens, WebLensInit } from "../src";
import { component$, useClientEffect$, useStore, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ container: null });
  useClientEffect$(() => {
    store.container = document.body;
  });

  useStyles$(`.trigger {
    text-align: center;
  }
  .trigger-action {
    padding: 2rem;
    font-size: xx-large;
  }`);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Web Lens</title>
      </head>
      <body>
        <div class="trigger">
          <button class="trigger-action" onClick$={() => toggle_lens()} autofocus>Launch Lens</button>
        </div>
        <WebLensInit container={store.container} />
      </body>
    </>
  );
});

