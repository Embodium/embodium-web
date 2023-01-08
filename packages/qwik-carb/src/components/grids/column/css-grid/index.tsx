import { CssColumnProps } from "./model";
import { prepare_classes } from "../../utils";
import { component$, Slot } from "@builder.io/qwik";
import { getClassNameForBreakpoints, getClassNameForSpan } from "../utils";

export const CSSGridColumn = component$((props: CssColumnProps) => {
  const class_prefix = props?.prefix ?? "cds";

  const generate_classes = () => {
    return prepare_classes({
      class: [
        props?.class,
        breakpoint_class,
        span_class,
        {
          [`${class_prefix}--css-grid-column`]: true,
        },
      ],
    });
  };

  const breakpoint_class = getClassNameForBreakpoints(
    [props?.sm, props?.md, props?.lg, props?.xlg, props?.max],
    class_prefix
  );
  const span_class = getClassNameForSpan(props?.span, class_prefix);

  return (
    <div id={props.id} class={generate_classes()}>
      <Slot />
    </div>
  );
});
