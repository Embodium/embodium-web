import { component$, PropFunction } from "@builder.io/qwik";

export const Collapser = component$<CollapserProps>((props?: CollapserProps) => {
  return <>
    {/* Expand Action */}
    <svg class="circular-container" onClick$={props?.onClick$} id="expand_less_e5ce" height="40" width="40">
      <path d="M11.958 25.625 10 23.667l10-10 10 9.958-1.958 1.958-8.042-8Z" />
      <title>Collapse</title>
    </svg>
  </>
});

export type CollapserProps = {
  readonly onClick$: PropFunction<() => void>;
}
