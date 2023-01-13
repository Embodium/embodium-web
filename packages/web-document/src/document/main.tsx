import { Header } from "../header";
import { DocumentDescriptor } from "./descriptor";
import { component$, Slot } from "@builder.io/qwik";
import { render_metadata } from "./metadata/render-metadata";

export const WebDocument = component$<DocumentDescriptor>((props: DocumentDescriptor) => {

  return <>
    <head>
      {/* Metadata */}
      {render_metadata(props?.lang, props?.metadata)}

      <Slot name="head" />
    </head>
    <body style="min-height: 100vh">
      <Header {...props?.header}>
        <Slot name="header" />
      </Header>
      <Slot />

      <footer>
        <Slot name="main-footer" />
      </footer>
    </body>
  </>
});
