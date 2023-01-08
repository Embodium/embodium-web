import { Classifiable } from "../../utils/classifiable";

export type PercentSpan = "25%" | "50%" | "75%" | "100%";

export type Breakpoint = {
    readonly span?: boolean | number;
    readonly offset?: number;
}

export type Breakpoints = {
    readonly sm?: SpanProp;
    readonly md?: SpanProp;
    readonly lg?: SpanProp;
    readonly xlg?: SpanProp;
    readonly max?: SpanProp;
}

export type CssGridSpanShape = {
    readonly span: number | PercentSpan;
    readonly offset: number;
    readonly start: number;
    readonly end: number;
};

export type SpanShape = {
    readonly span: number;
    readonly offset: number;
}

export type CssGridSpanProp = boolean | number | CssGridSpanShape | PercentSpan;
export type NonCssGridSpanProp = boolean | number | SpanShape;
export type SpanProp = CssGridSpanProp | NonCssGridSpanProp;

export type CssColumnProps = Breakpoints & Classifiable & {
    readonly prefix?: string;
    readonly id?: string;
    readonly span?:
    | number
    | PercentSpan
    | {
        readonly span: number | PercentSpan;
        readonly start: number;
        readonly end: number;
    };
};
