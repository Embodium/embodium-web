import { Header } from "../header";
import { DocumentProps } from "./props";
import { render as render_head } from "../head";
import { component$, Slot } from "@builder.io/qwik";

export const WebDocument = component$<DocumentProps>((props: DocumentProps) => {

  return <>
    <head>
      {render_head(props?.document?.head)}
      <Slot name="head" />
    </head>
    <body style="min-height: 100vh">
      <Slot name="body-start" />
      <Header {...props?.document?.body?.header}>
        <Slot name="header" />
      </Header>
      <Slot />
      <footer>
        <Slot name="main-footer" />
      </footer>
      <Slot name="body-end" />
    </body>
  </>
});
