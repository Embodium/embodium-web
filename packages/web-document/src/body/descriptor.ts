import { FooterDescriptor } from "../footer";
import { HeaderDescriptor } from "../header";
import { GlobalAttributes } from "../global/props";

export type BodyDescriptor = {
    readonly header?: HeaderDescriptor;
    readonly footer?: FooterDescriptor;
    readonly includeDefaultStyle?: boolean;
    readonly attributes?: GlobalAttributes;
}
