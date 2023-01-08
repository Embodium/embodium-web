import {
  component$,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";
import { GridSettingProps, gridSettingsContext } from "./model";

export const GridSettings = component$<GridSettingProps>(
  (props: GridSettingProps) => {
    useContextProvider(gridSettingsContext, {
      mode: props?.mode,
      subgrid: props?.subgrid,
    });
    return <Slot />;
  }
);
