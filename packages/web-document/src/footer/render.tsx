import { Slot } from "@builder.io/qwik"
import { FooterDescriptor } from "./descriptor"

export const render = (footer?: FooterDescriptor) => {
  return <>
    <footer id={footer?.id}>
      <Slot name="footer" />
    </footer>
  </>
}
