import { Metadata } from "./descriptor"

export const render_encoding = (metadata?: Metadata) => {
  return <>
    {/* Metadata: Character Set */}
    <meta charSet={metadata?.charset?.trim() ?? "utf-8"} />
  </>
}
