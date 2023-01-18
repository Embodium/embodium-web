import { Slot } from "@builder.io/qwik";
import { HeaderDescriptor } from "./descriptor";
import { prepare_data_attributes } from "../global/utils";

export const render = (header?: HeaderDescriptor) => {
  return <>
    <header id={header?.attributes?.id} {...prepare_data_attributes(header?.attributes?.data)}>
      <Slot />
    </header>
  </>
}
