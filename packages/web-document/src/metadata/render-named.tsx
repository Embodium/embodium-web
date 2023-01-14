import { Metadata } from "./descriptor";

export const render_named = (metadata?: Metadata) => {
  return <>
    {/* Metadata: Application Name */}
    {metadata?.["application-name"]?.trim() && <meta name="application-name" content={metadata?.["application-name"]?.trim() ?? ""} />}

    {/* Metadata: Generator */}
    {metadata?.generator?.trim() && <meta name="generator" content={metadata?.generator?.trim() ?? ""} />}

    {/* Metadata: Keywords */}
    {metadata?.keywords
    && Array.isArray(metadata?.keywords)
    && metadata?.keywords?.filter(x => x?.trim()).length
    && <meta name="keywords" content={metadata?.keywords?.filter(x => x?.trim()).map(x => x?.trim()).join(',')} />}

    {/* Metadata: Referrer */}
    {metadata?.referrer?.trim() && <meta name="referrer" content={metadata?.referrer?.trim() ?? ""} />}

    {/* Metadata: color-scheme */}
    {metadata?.["color-scheme"]
    && typeof metadata?.["color-scheme"] === "string"
    && metadata?.["color-scheme"]?.trim()
    && <meta name="color-scheme" content={metadata?.["color-scheme"]?.trim() ?? ""} />}

    {metadata?.["color-scheme"] && Array.isArray(metadata?.["color-scheme"])
    && metadata?.["color-scheme"]?.filter(x => x?.trim()).length === 2
    && <meta name="color-scheme" content={metadata?.["color-scheme"]
					 ?.filter(x => x?.trim())
					 ?.map(x => x?.trim())
					 ?.slice(0, 2)
					 ?.join(",") ?? ""}
    />}

    {/* Named Metadata: Description */}
    {metadata?.description?.trim() && <meta name="description" content={metadata?.description?.trim() ?? ""} />}

    {/* Named Metadata: robots */}
    {metadata?.robots
    && Array.isArray(metadata?.robots)
    && metadata?.robots?.filter(x => x?.trim()).length
    && <meta name="robots" content={metadata?.robots?.map(x => x?.trim())?.filter(x => x)?.join(",")} />}

    {/* Named Metadata: googlebot */}
    {metadata?.googlebot
    && Array.isArray(metadata?.googlebot)
    && metadata?.googlebot?.filter(x => x?.trim()).length
    && <meta name="googlebot" content={metadata?.googlebot?.map(x => x?.trim())?.filter(x => x)?.join(",")} />}

    {/* Named Metadata: creator */}
    {metadata?.creator
    && Array.isArray(metadata?.creator)
    && metadata?.creator?.filter(x => x?.trim()).length
    && metadata?.creator
    ?.map(x => x?.trim())
    ?.filter(x => x)
    ?.map(x => <meta name="creator" content={x} />)}

    {/* Named Metadata: publisher */}
    {metadata?.publisher?.trim()
    && <meta name="publisher" content={metadata?.publisher?.trim()} />}

    {/* Named Metadata: theme-color */}
    {metadata?.['theme-color']
    && typeof metadata?.['theme-color'] === "string"
    && metadata?.['theme-color']?.trim()
    && <meta name="theme-color" content={metadata?.['theme-color']?.trim()} />}

    {metadata?.['theme-color']
    && typeof metadata?.['theme-color'] === "object"
    && <meta name="theme-color" content={metadata?.['theme-color']?.color?.trim()} media={metadata?.['theme-color']?.media?.trim()} />}

    {/* Named Metadata: viewport */}
    {metadata?.viewport
    && <meta name="viewport" content={Object
      .entries(metadata?.viewport ?? {})
      .map(([key, value]) => `${key}=${value}`)
      .join(",")} />}

  </>
}
