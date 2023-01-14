import { CustomMetadata } from "./descriptor"

export const render_custom = (custom?: Array<CustomMetadata>) => {
  return <>
    {custom
      && Array.isArray(custom)
      && custom
        ?.filter(x => x)
        ?.map(c => <meta {...{ [`${c.alias ?? "name"}`]: `${c.name}`, ["content"]: `${c.content}`, ...c.additional }} />)}
  </>
}
