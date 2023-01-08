import { CSSSubgridProps } from "./models";
import { prepare_classes } from "../utils";
import { component$, Slot } from "@builder.io/qwik";

export const Subgrid = component$<CSSSubgridProps>(
  ({
    prefix,
    class: class_name,
    mode,
    ...rest
  }) => {
    const class_prefix = prefix ?? "cds";
    const class_names = prepare_classes([
      class_name,
      {
        [`${class_prefix}--subgrid`]: true,
        [`${class_prefix}--subgrid--condensed`]: mode === "condensed",
        [`${class_prefix}--subgrid--narrow`]: mode === "narrow",
        [`${class_prefix}--subgrid--wide`]: mode === "wide",
      },
    ]);
    return (
      <div {...rest} class={class_names}>
        <Slot />
      </div>
    );
  }
);
