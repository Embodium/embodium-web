import { Slot } from "@builder.io/qwik";
import { BodyDescriptor } from "./descriptor";

export const render = (body?: BodyDescriptor) => {
  console.log(body);
  return <>
    <body>
      <Slot name="body-start" />
      <Slot name="header" />
      <Slot />
      <Slot name="footer" />
      <Slot name="body-end" />
    </body>
  </>
}
