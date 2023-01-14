import { Metadata } from "./descriptor";
import { render_named } from "./render-named";
import { render_title } from "./render-title";
import { render_custom } from "./render-custom";
import { render_pragma } from "./render-pragma";
import { render_encoding } from "./render-encoding";

export const render_metadata = (metadata?: Metadata) => {
  return <>
    {/* Metadata: Encoding */}
    {render_encoding(metadata)}

    {render_title(metadata?.title)}
    
    {/* Metadata: Named */}
    {render_named(metadata)}

    {/* Metadata: Pragma Directives */}
    {render_pragma(metadata?.pragma)}

    {/* Metadata: Custom */}
    {render_custom(metadata?.custom)}
  </>
}
