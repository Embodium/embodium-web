import { Header } from "../header";
import { BodyDescriptor } from "./descriptor";
import { component$, Slot } from "@builder.io/qwik";

export const Body = component$<BodyDescriptor>((props: BodyDescriptor) => {
  return <>
    <Header {...props?.header}>
      <Slot name="header" />
    </Header>
    <Slot />
  </>
});
