import { HeadDescriptor } from "./descriptor";
import { render_metadata } from "../metadata/render-metadata";

export const render = (head?: HeadDescriptor) => {
  return <>
    {/* Metadata */}
    {render_metadata(head?.metadata)}
    
    {/* {render_metadata({ ...{ ['content-language']: props?.lang, ...head?.metadata } })} */}
  </>
}
