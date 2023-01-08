import { FlexGridProps } from "./models";
import styles from "./styles.scss?inline";
import { GridSettings } from "../settings";
import { prepare_classes } from "../utils";
import { gridSettingsContext } from "../model";
import { component$, Slot, useContextProvider, useStylesScoped$ } from "@builder.io/qwik";


export const FlexGrid = component$<FlexGridProps>((props: FlexGridProps) => {
  useStylesScoped$(styles);
  const {
    prefix,
    condensed,
    narrow,
    fullwidth,
    class: class_name,
    ...rest
  } = props;

  const class_prefix = prefix ?? "cds";
  const class_names = prepare_classes({
    class: [
      class_name,
      {
        [`${class_prefix}--grid`]: true,
        [`${class_prefix}--grid--condensed`]: condensed,
        [`${class_prefix}--grid--narrow`]: narrow,
        [`${class_prefix}--grid--full-width`]: fullwidth,
      },
    ],
  });

  useContextProvider(gridSettingsContext, {
    mode: 'flexbox',
    subgrid: false
  });

  return (
    <GridSettings mode="flexbox" subgrid={false}>
      <div class={class_names} {...rest}>
        <Slot />
      </div>
    </GridSettings>
  );
});
