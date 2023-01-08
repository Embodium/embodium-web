import { Subgrid } from "./subgrid";
import { GridSettings } from "../settings";
import { prepare_classes } from "../utils";
import { CSSGridProps, CSSSubgridProps } from "./models";
import { component$, Slot, useContext } from "@builder.io/qwik";
import { GridSettingsContext, gridSettingsContext } from "../model";

export const CSSGrid = component$<CSSGridProps>((props: CSSGridProps) => {
  const {
    prefix,
    condensed,
    narrow,
    fullwidth,
    class: class_name,
    ...rest
  } = props;

  const { subgrid } = useContext<GridSettingsContext>(gridSettingsContext);

  let mode: NonNullable<CSSSubgridProps["mode"]> = "wide";
  if (narrow) {
    mode = "narrow";
  } else if (condensed) {
    mode = "condensed";
  }

  const class_prefix = prefix ?? "cds";

  const class_names = prepare_classes([
    class_name,
    {
      [`${class_prefix}--css-grid`]: true,
      [`${class_prefix}--css-grid--condensed`]: mode === "condensed",
      [`${class_prefix}--css-grid--narrow`]: mode === "narrow",
      [`${class_prefix}--css-grid--full-width`]: fullwidth,
    },
  ]);
  return (
    <GridSettings mode="css-grid" subgrid>
      {subgrid ? (
        <Subgrid class={class_name} prefix={prefix} mode={mode} {...rest}>
          <Slot />
        </Subgrid>
      ) : (
        <div class={class_names} {...rest}>
          <Slot />
        </div>
      )}
    </GridSettings>
  );
});
