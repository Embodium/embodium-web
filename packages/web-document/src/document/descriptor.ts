import { Metadata } from "./metadata";
import { HeaderDescriptor } from "../header/descriptor";

export type DocumentDescriptor = {
    readonly lang?: string;
    readonly metadata?: Metadata;
    readonly header?: HeaderDescriptor;
    readonly noFooter?: boolean;
}
