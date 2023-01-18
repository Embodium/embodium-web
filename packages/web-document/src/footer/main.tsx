import { FooterProps } from "./props";
import { component$, Slot } from "@builder.io/qwik";

export const Footer = component$<FooterProps>((props?: FooterProps) => {
  return <>
    <footer id={props?.footer?.id}>
      <Slot />
    </footer>
  </>
});
