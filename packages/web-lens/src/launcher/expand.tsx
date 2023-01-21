import { component$, PropFunction } from "@builder.io/qwik";

export const Expander = component$<ExpandProps>((props?: ExpandProps) => {
  return <>
    {/* Expand Action */}
    <svg class="circular-container" onClick$={props?.onClick$} id="expand_more_e5cf" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
      <path d="m20 25.625-10-10 1.958-1.958L20 21.708l8.042-8.041 1.958 2Z" />
      <title>Expand</title>
    </svg>
  </>
});

export type ExpandProps = {
  readonly onClick$: PropFunction<() => void>;
}
