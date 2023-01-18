import { BodyDescriptor } from "../body";
import { HeadDescriptor } from "../head";
import { GlobalAttributes } from "../global/props";

export type DocumentDescriptor = GlobalAttributes & {
    readonly lang?: string;
    readonly head?: HeadDescriptor;
    readonly overrideHead?: boolean;
    readonly body?: BodyDescriptor;
    readonly overrideBody?: boolean;
}
