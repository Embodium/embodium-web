import { Body } from "../body";
import { Head } from "../head";
import { DocumentProps } from "./props";
import { component$, Slot } from "@builder.io/qwik";

export const WebDocument = component$<DocumentProps>((props: DocumentProps) => {

  return <>
    {props?.document?.overrideHead && <Slot name="head" />}
    {!props?.document?.overrideHead && <Head head={props?.document?.head}>
      <Slot name="head" />
    </Head>}

    {props?.document?.overrideBody && <Slot name="body" />}
    {!props?.document?.overrideBody &&
     <Body body={props?.document?.body}>
       <Slot name="body-start" />
       <Slot name="header" />
       <Slot name="nav" />
       <Slot name="main" />
       <Slot name="aside" />
       <Slot name="footer" />
       <Slot name="body-end" />
       <Slot />
     </Body>}
  </>
});
