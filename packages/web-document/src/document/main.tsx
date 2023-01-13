import { Header } from "../header";
import { DocumentDescriptor } from "./descriptor";
import { component$, Slot } from "@builder.io/qwik";

export const WebDocument = component$<DocumentDescriptor>((props: DocumentDescriptor) => {

  return <>
    <head>
      {/* Title */}
      <title>{props?.metadata?.title ?? "Embodium Web Document"}</title>

      {/* Metadata */}
      {/* Metadata: Application Name */}
      {props?.metadata?.["application-name"]?.trim() && <meta name="application-name" content={props?.metadata?.["application-name"]?.trim() ?? ""} />}

      {/* Metadata: Generator */}
      {props?.metadata?.generator?.trim() && <meta name="generator" content={props?.metadata?.generator?.trim() ?? ""} />}

      {/* Metadata: Character Set */}
      <meta charSet={props?.metadata?.charset?.trim() ?? "utf-8"} />

      {/* Metadata: Keywords */}
      {props?.metadata?.keywords
      && Array.isArray(props?.metadata?.keywords)
      && props?.metadata?.keywords?.filter(x => x?.trim()).length
      && <meta name="keywords" content={props?.metadata?.keywords?.filter(x => x?.trim()).map(x => x?.trim()).join(',')} />}

      {/* Metadata: Referrer */}
      {props?.metadata?.referrer?.trim() && <meta name="referrer" content={props?.metadata?.referrer?.trim() ?? ""} />}

      {/* Metadata: color-scheme */}
      {props?.metadata?.["color-scheme"]
      && typeof props?.metadata?.["color-scheme"] === "string"
      && props?.metadata?.["color-scheme"]?.trim()
      && <meta name="color-scheme" content={props?.metadata?.["color-scheme"]?.trim() ?? ""} />}

      {props?.metadata?.["color-scheme"] && Array.isArray(props?.metadata?.["color-scheme"])
      && props.metadata?.["color-scheme"]?.filter(x => x?.trim()).length === 2
      && <meta name="color-scheme" content={props.metadata?.["color-scheme"]
					   ?.filter(x => x?.trim())
					   ?.map(x => x?.trim())
					   ?.slice(0, 2)
					   ?.join(",") ?? ""}
      />}

      {/* Metadata: Pragma Directives */}
      <meta http-equiv="content-language" content={(props?.metadata?.pragma?.['content-language']?.trim() ?? "") ||(props?.lang ?? "") || "en-us"} />
      {props?.metadata?.pragma?.['content-type']?.trim() && <meta http-equiv="content-type" content={props?.metadata?.pragma?.['content-type']?.trim() ?? ""} />}
      {props?.metadata?.pragma?.['default-style']?.trim() && <meta http-equiv="default-style" content={props?.metadata?.pragma?.['default-style']?.trim() ?? ""} />}
      {props?.metadata?.pragma?.['refresh']?.trim() && <meta http-equiv="refresh" content={props?.metadata?.pragma?.['refresh']?.trim() ?? ""} />}
      {props?.metadata?.pragma?.['set-cookie']?.trim() && <meta http-equiv="set-cookie" content={props?.metadata?.pragma?.['set-cookie']?.trim() ?? ""} />}
      {props?.metadata?.pragma?.['x-ua-compatible']?.trim() && <meta http-equiv="x-ua-compatible" content={props?.metadata?.pragma?.['x-ua-compatible']?.trim() ?? ""} />}
      {props?.metadata?.pragma?.['content-security-policy']?.trim() && <meta http-equiv="content-security-policy" content={props?.metadata?.pragma?.['content-security-policy']?.trim() ?? ""} />}

      {/* Named Metadata: Description */}
      {props?.metadata?.description?.trim() && <meta name="description" content={props?.metadata?.description?.trim() ?? ""} />}

      {/* Named Metadata: robots */}
      {props?.metadata?.robots
      && Array.isArray(props?.metadata?.robots)
      && props?.metadata?.robots?.filter(x => x?.trim()).length
      && <meta name="robots" content={props?.metadata?.robots?.map(x => x?.trim())?.filter(x => x)?.join(",")} />}

      {/* Named Metadata: googlebot */}
      {props?.metadata?.googlebot
      && Array.isArray(props?.metadata?.googlebot)
      && props?.metadata?.googlebot?.filter(x => x?.trim()).length
      && <meta name="googlebot" content={props?.metadata?.googlebot?.map(x => x?.trim())?.filter(x => x)?.join(",")} />}

      {/* Named Metadata: creator */}
      {props?.metadata?.creator
      && Array.isArray(props?.metadata?.creator)
      && props?.metadata?.creator?.filter(x => x?.trim()).length
      && props?.metadata?.creator
      ?.map(x => x?.trim())
      ?.filter(x => x)
      ?.map(x => <meta name="creator" content={x} />)}

      {/* Named Metadata: publisher */}
      {props?.metadata?.publisher?.trim()
      && <meta name="publisher" content={props?.metadata?.publisher?.trim()} />}

      {/* Named Metadata: theme-color */}
      {props?.metadata?.['theme-color']
      && typeof props?.metadata?.['theme-color'] === "string"
      && props?.metadata?.['theme-color']?.trim()
      && <meta name="theme-color" content={props?.metadata?.['theme-color']?.trim()} />}

      {props?.metadata?.['theme-color']
      && typeof props?.metadata?.['theme-color'] === "object"
      && <meta name="theme-color" content={props?.metadata?.['theme-color']?.color?.trim()} media={props?.metadata?.['theme-color']?.media?.trim()} />}

      {/* Named Metadata: viewport */}
      {props?.metadata?.viewport
      && <meta name="viewport" content={Object
        .entries(props?.metadata?.viewport ?? {})
        .map(([key, value]) => `${key}=${value}`)
        .join(",")} />}

      {/* Custom Metadata */}
      {props?.metadata?.custom
      && Array.isArray(props?.metadata?.custom)
      && props?.metadata?.custom
      ?.filter(x => x)
      ?.map(c => <meta {...{ [`${c.alias ?? "name"}`]: `${c.name}`, ["content"]: `${c.content}`, ...c.additional }} />)}


      <Slot name="head" />
    </head>
    <body style="min-height: 100vh">
      <Header {...props?.header}>
        <Slot name="header" />
      </Header>
      <Slot />

      <footer>
        <Slot name="main-footer" />
      </footer>
    </body>
  </>
});
