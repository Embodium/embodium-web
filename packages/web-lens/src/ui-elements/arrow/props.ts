import { PropFunction } from "@builder.io/qwik";

export type ArrowProps = {
    class?: string;
    direction?: 'up' | 'down';
    onClick$?: PropFunction<() => void>;
    title?: string;
}
