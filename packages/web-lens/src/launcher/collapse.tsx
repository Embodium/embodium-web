import { Arrow } from "../ui-elements/arrow";
import { component$, PropFunction } from "@builder.io/qwik";

export const Collapser = component$<CollapserProps>((props?: CollapserProps) => {
  return <>
    {/* Collapse Action */}
    <Arrow direction={"up"} onClick$={props?.onClick$} />
  </>
});

export type CollapserProps = {
  readonly onClick$: PropFunction<() => void>;
}
