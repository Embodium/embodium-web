import { Arrow } from "../ui-elements/arrow";
import { component$, PropFunction } from "@builder.io/qwik";

export const Expander = component$<ExpandProps>((props?: ExpandProps) => {
  return <>
    {/* Expand Action */}
    <Arrow direction={(props?.state ?? "collapsed") === "collapsed" ? "down" : "up"} onClick$={props?.onClick$} />
  </>
});

export type ExpandProps = {
  state?: ExpanderState;
  readonly onClick$?: PropFunction<() => void>;
}


export type ExpanderState = 'expanded' | 'collapsed';
