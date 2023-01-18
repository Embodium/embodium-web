import { render } from "./render";
import { HeadProps } from "./props";
import { component$, Slot } from "@builder.io/qwik";

export const Head = component$<HeadProps>((props?: HeadProps) => {

  return <>
    <head>
      {render(props?.head)}
      <Slot />
    </head>
  </>
});
