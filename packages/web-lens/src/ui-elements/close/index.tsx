import styles from "./styles.scss?inline";
import { component$, useStyles$ } from "@builder.io/qwik";

export const Close = component$(() => {
  useStyles$(styles);

  return <>
    <span class="close-container">
      <span class="close-icon">
        <i class="diagonal-1" />
        {/* <i class="diagonal-2" /> */}
      </span>
    </span>
  </>
});
