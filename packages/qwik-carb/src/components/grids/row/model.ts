import { Condensable, Narrowable } from "../models";
import { Classifiable } from "../utils/classifiable";

export type RowProps = Classifiable & Condensable & Narrowable & {
    readonly id?: string;
    readonly [key: string]: any;
}