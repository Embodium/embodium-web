import { RowProps } from "../row/model";
import { ClassList } from "./classifiable";
import { GridProps } from "../../grids/model";
import { ColumnProps } from "../column/model";

export type ClassPreparationOptions = Omit<GridProps & ColumnProps & RowProps, "class"> & {
    readonly class?: ClassList;
};
