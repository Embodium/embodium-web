import { CssColumnProps, SpanProp } from "./css-grid/model";
import { Classifiable } from "../utils/classifiable";

export type ColumnProps = Classifiable & {
    readonly prefix?: string;
    readonly id?: string;
    readonly sm?: SpanProp;
    readonly md?: SpanProp;
    readonly lg?: SpanProp;
    readonly xlg?: SpanProp;
    readonly max?: SpanProp;
} & { span: CssColumnProps["span"] };
