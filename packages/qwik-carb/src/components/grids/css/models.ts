import { GridProps } from "../model";
import { Classifiable } from "../utils/classifiable";

export type CSSGridProps = GridProps;

export type CSSSubgridProps = Classifiable & {
    readonly prefix?: string;
    readonly mode?: 'wide' | 'narrow' | 'condensed';
    readonly [key: string]: any;
}
