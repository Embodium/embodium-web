import { ColumnProps } from "./model";
import { prepare_classes } from "../utils";
import { CSSGridColumn } from "./css-grid";
import { getClassNameForFlexGridBreakpoints } from "./utils";
import { component$, Slot, useContext } from "@builder.io/qwik";
import { GridSettingsContext, gridSettingsContext } from "../model";

export const Column = component$<ColumnProps>((props: ColumnProps) => {
  const { prefix, sm, md, lg, xlg, max, span: _span, ...rest } = props;
  const { mode } = useContext<GridSettingsContext>(gridSettingsContext);

  const class_prefix = prefix ?? "cds";

  const columnClassName = getClassNameForFlexGridBreakpoints(
    [sm, md, lg, xlg, max],
    class_prefix
  );
  const className = prepare_classes({
    class: [
      props?.class,
      columnClassName,
      {
        [`${class_prefix}--col`]: columnClassName.length === 0,
      },
    ],
  });

  return (
    <>
      {mode === "css-grid" ? (
        <CSSGridColumn {...props}>
          <Slot />
        </CSSGridColumn>
      ) : (
        <div class={className} {...rest}>
          <Slot />
        </div>
      )}
    </>
  );
});
