import { BodyProps } from "./props";
import classNames from "classnames";
import { component$, Slot } from "@builder.io/qwik";
import { prepare_data_attributes } from "../global/utils";

export const Body = component$<BodyProps>((props: BodyProps) => {
  const default_style = { "min-height": "100vh", margin: 0 };

  return <>
    <body id={props?.body?.attributes?.id} class={classNames(props?.body?.attributes?.class_list)} {...prepare_data_attributes(props?.body?.attributes?.data)}
      style={{ ...((props?.body?.includeDefaultStyle ?? true) ? { ...default_style } : undefined), ...props?.body?.attributes?.style }}>
      <Slot name="body-start" />
      <Slot name="header" />
      <Slot name="nav" />
      <Slot name="main" />
      <Slot name="aside" />
      <Slot name="footer" />
      <Slot name="body-end" />
      <Slot />
    </body>
  </>
});
