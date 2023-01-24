import { Arrow } from "../ui-elements/arrow";
import { component$, PropFunction } from "@builder.io/qwik";

export const Expander = component$<ExpandProps>((props?: ExpandProps) => {
  return <>
    {/* Expand Action */}
    <Arrow onClick$={props?.onClick$} />
  </>
});

export type ExpandProps = {
  readonly onClick$?: PropFunction<() => void>;
}
