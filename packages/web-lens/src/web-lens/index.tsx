import { Launcher } from "../launcher";
import compStyles from "./main.scss?inline";
import holyGrailStyles from "../layouts/holy-grail.scss?inline";
import { component$, PropFunction, useStyles$ } from "@builder.io/qwik";


export const WebLens = component$<WebLensProps>((_props?: WebLensProps) => {
  useStyles$(holyGrailStyles);
  useStyles$(compStyles);

  return <>
    <header class="wl-header">
      <Launcher />
    </header>
    <nav class="wl-nav"></nav>
    <main class="wl-main"></main>
    <aside class="wl-aside"></aside>
    <footer class="wl-footer"></footer>
  </>
})

export type WebLensProps = {
  readonly container?: Element;
  readonly onClose$?: PropFunction<() => void>;
}

