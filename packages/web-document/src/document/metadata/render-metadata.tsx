import { Metadata } from "./descriptor";
import { render_named } from "./render-named";
import { render_custom } from "./render-custom";
import { render_pragma } from "./render-pragma";

export const render_metadata = (lang?: string, metadata?: Metadata) => {
  return <>
    {/* Title */}
    <title>{metadata?.title ?? "Embodium Web Document"}</title>

    {/* Metadata: Pragma Directives */}
    {render_pragma(lang, metadata?.pragma)}

    {/* Metadata: Named */}
    {render_named(metadata)}

    {/* Metadata: Custom */}
    {render_custom(metadata?.custom)}
  </>
}
