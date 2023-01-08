import { RowProps } from "./model";
import { prepare_classes } from "../utils";
import { component$, Slot } from "@builder.io/qwik";

export const Row = component$((props: RowProps) => {
  const {
    prefix,
    condensed,
    narrow,
    class: class_name,
    ...rest
  } = props;

  const class_prefix = prefix ?? "cds";
  const class_names = prepare_classes({
    class: [
      class_name,
      {
        [`${class_prefix}--row`]: true,
        [`${class_prefix}--row--condensed`]: condensed,
        [`${class_prefix}--row--narrow`]: narrow,
      },
    ],
  });

  return (
    <div id={props.id} class={class_names} {...rest}>
      <Slot />
    </div>
  );
});
