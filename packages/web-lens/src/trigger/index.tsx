import { TriggerProps } from "./props";
import { toggle_lens } from "../toggle_lens";
import comp_styles from "./styles.scss?inline";
import { component$, Slot, useStyles$ } from "@builder.io/qwik";

export const LensTrigger = component$<TriggerProps>((props?: TriggerProps) => {
  useStyles$(comp_styles);

  return <>
    <button class="trigger-container" onClick$={() => toggle_lens()} autofocus>
      {props?.override ? <Slot /> : <i class="trigger-icon">&#128269;</i>}
    </button>
  </>
}); 
