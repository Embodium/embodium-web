import { ArrowProps } from "./props";
import { component$ } from "@builder.io/qwik";

export const Arrow = component$<ArrowProps>((props?: ArrowProps) => {

  return <>
    {props?.direction === "up" &&
      <svg onClick$={props?.onClick$} id="expand_less_e5ce" height="40" width="40">
        <path d="M11.958 25.625 10 23.667l10-10 10 9.958-1.958 1.958-8.042-8Z" />
        <title>{props?.title ?? "Collapse"}</title>
      </svg>
    }

    {/* Default */}
    {(props?.direction ?? "down") === "down" &&
      <svg onClick$={props?.onClick$} id="expand_more_e5cf" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <path d="m20 25.625-10-10 1.958-1.958L20 21.708l8.042-8.041 1.958 2Z" />
        <title>{props?.title ?? "Expand"}</title>
      </svg>}
  </>
});
