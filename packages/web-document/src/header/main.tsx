import { HeaderDescriptor } from "./descriptor";
import { component$, Slot } from "@builder.io/qwik";

export const Header = component$<HeaderDescriptor>((props: HeaderDescriptor) => {
  /*   console.log("Show me the props", props); */
  return <>
    {
      !props?.noHeader &&
      <header id={props?.id}>
        <Slot />
      </header>
      || <Slot />
    }
  </>
});
