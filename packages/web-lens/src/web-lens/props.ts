import { WebLensStore } from "./store";
import { PropFunction } from "@builder.io/qwik";


export type WebLensProps = {
    readonly container?: Element;
    readonly onClose$?: PropFunction<() => void>;
    readonly store?: WebLensStore;
}
