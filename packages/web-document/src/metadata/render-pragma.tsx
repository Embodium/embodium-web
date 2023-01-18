import { PragmaDirective } from "./pragma";

export const render_pragma = (pragma?: PragmaDirective) => {
  return <>
    {/* Metadata: Pragma Directives */}
    <meta http-equiv="content-language" content={(pragma?.['content-language']?.trim() ?? "") || "en-us"} />
    {pragma?.['content-type']?.trim() && <meta http-equiv="content-type" content={pragma?.['content-type']?.trim() ?? ""} />}
    {pragma?.['default-style']?.trim() && <meta http-equiv="default-style" content={pragma?.['default-style']?.trim() ?? ""} />}
    {pragma?.refresh && typeof pragma?.refresh === "number" && <meta http-equiv="refresh" content={`${(pragma?.refresh ?? -1)}`} />}
    {pragma?.refresh && typeof pragma?.refresh === "object" && <meta http-equiv="refresh" content={`${pragma?.refresh?.interval};${pragma?.refresh?.url}`} />}

    {/* http-equiv set-cookie is deprecated. silent on FF but errors in chrome */}
    {/* {pragma?.['set-cookie']?.trim() && <meta http-equiv="set-cookie" content={pragma?.['set-cookie']?.trim() ?? ""} />} */}
    {pragma?.['x-ua-compatible']?.trim() && <meta http-equiv="x-ua-compatible" content={pragma?.['x-ua-compatible']?.trim() ?? ""} />}
    {pragma?.['content-security-policy']?.trim() && <meta http-equiv="content-security-policy" content={pragma?.['content-security-policy']?.trim() ?? ""} />}

  </>
}
