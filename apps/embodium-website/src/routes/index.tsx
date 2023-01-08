import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <p>Something That you must Understand</p>;
});

export const head: DocumentHead = {
  title: "Embodium",
  meta: [
    {
      name: "description",
      content: "Embodium - The Company",
    },
  ],
};
