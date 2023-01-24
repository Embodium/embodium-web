import classNames from "classnames";
import { ArrowProps } from "./props";
import styles from "./arrow.scss?inline";
import { component$, PropFunction, useStyles$ } from "@builder.io/qwik";

export const Arrow = component$<ArrowProps>((props?: ArrowProps) => {
  useStyles$(styles);
  return <>
    <span class="arrow-container" title={props?.title ?? (props?.direction === "up" ? "Collapse" : "Expand")}>
      <i class={classNames(props?.class, props?.direction ?? "down")} onClick$={props?.onClick$}></i>
    </span>
  </>
});
