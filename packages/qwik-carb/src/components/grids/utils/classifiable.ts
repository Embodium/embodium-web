import classNames from "classnames";

export type ClassList = classNames.ArgumentArray;

export type Classifiable = {
    readonly class?: string; 
}