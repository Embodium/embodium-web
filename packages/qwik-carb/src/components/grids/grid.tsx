import { CSSGrid } from "./css";
import { FlexGrid } from "./flex";
import { GridProps } from "./model";
import { component$ } from "@builder.io/qwik";
import { enabled } from "@carbon/feature-flags";

export const Grid = component$<GridProps>((props: GridProps) => {
  const enableCSSGrid = enabled("enable-css-grid");

  return (
    <>{enableCSSGrid ? <CSSGrid {...props} /> : <FlexGrid {...props} />}</>
  );
});
