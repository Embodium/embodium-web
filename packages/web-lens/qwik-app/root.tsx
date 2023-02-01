import root_styles from "./styles.scss?inline";
import { LensTrigger, WebLensInit } from "../src";
import { component$, useClientEffect$, useStore, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ container: null });
  useClientEffect$(() => {
    store.container = document.body;
  });

  useStyles$(root_styles);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Web Lens</title>
      </head>
      <body>
        <div class="lens-trigger" title="Launch Lens">
          <LensTrigger />
        </div>
        <WebLensInit container={store.container} />
      </body>
    </>
  );
});

