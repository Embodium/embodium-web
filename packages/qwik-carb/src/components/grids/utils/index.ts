import classNames from "classnames";
import { ClassPreparationOptions } from "./options";
import { createContext, useContext } from "@builder.io/qwik";

export const prepare_classes = (options: ClassPreparationOptions) => {
  return classNames(options?.class ?? []);
};

export const use_prefix = (prefix_to: string | undefined = undefined) => {
  const prefix_context = createContext(prefix_to ?? 'cds');
  return useContext(prefix_context);
}
