import classNames from "classnames";
import { HeadersProps } from "./props";
import { component$, Slot } from "@builder.io/qwik";
import { prepare_data_attributes } from "../global/utils";

export const Header = component$<HeadersProps>((props: HeadersProps) => {
  /*   console.log("Show me the props", props); */
  return <>
  {
      !props?.noHeader &&
      <header id={props?.header?.attributes?.id} class={classNames(props?.header?.attributes?.class_list)} {...prepare_data_attributes(props?.header?.attributes?.data)}>
        <Slot />
      </header>
      || <Slot />
    }
  </>
});
