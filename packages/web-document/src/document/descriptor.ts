import { BodyDescriptor } from "../body/descriptor";
import { HeadDescriptor } from "../head/descriptor";

export type DocumentDescriptor = {
    readonly lang?: string;
    readonly head?: HeadDescriptor;
    readonly body?: BodyDescriptor;
}
