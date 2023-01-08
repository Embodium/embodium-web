import { Classifiable } from "./utils/classifiable";
import { createContext, HTMLAttributes } from "@builder.io/qwik";

export type GridProps = Classifiable &
  Pick<HTMLAttributes<unknown>, "id" | "style"> & {
    readonly prefix?: string;
    readonly condensed?: boolean;
    readonly narrow?: boolean;
    readonly fullwidth?: boolean;
    [key: string]: any;
  };

export type GridSettingsContext = {
  /**
   * Specify the grid mode for the GridContext
   */
  readonly mode: "flexbox" | "css-grid";

  /**
   * Specify whether subgrid should be enabled
   */
  readonly subgrid: boolean;
};

export type GridSettingProps = GridSettingsContext;

export const gridSettingsContext =
  createContext<GridSettingsContext>("grid-context");
