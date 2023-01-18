import { Body } from "../src/body";
import { component$ } from "@builder.io/qwik";
import { DocumentDescriptor, WebDocument, Viewport } from "../src";

export default component$(() => {
  const doc: DocumentDescriptor = {
    head: {
      metadata: {
        ['application-name']: "",
        // charset?: string;
        ['color-scheme']: 'normal',
        creator: ["nranjan@embodium.org", "engineering@embodium.org"],
        custom: [{ alias: 'property', name: 'og:property1', content: 'Nalin', additional: { 'k1': "1" } }],
        description: "A library developed by Embodium for creating a Web Document",
        generator: "Nalin Ranjan",
        /*     googlebot?: Array<Robot>; */
        keywords: ["Embodium", "Document", "WebDocument", "Web"],
        pragma: {
          ['content-language']: 'en-US',
          ['content-type']: 'text/html',
          ['default-style']: 'none',
          refresh: { interval: -3, url: "/" },
          // ['set-cookie']: 'xxx',
          ['x-ua-compatible']: 'IE=edge',
          ['content-security-policy']: ''
        },
        publisher: "embodium.org",
        referrer: 'no-referrer',
        robots: ["nofollow", "index"],
        ['theme-color']: '  ',
        title: "Web Document",
        viewport: { width: 1 } as Viewport
      }
    },
    overrideBody: false,
    body: {
      includeDefaultStyle: true,
      attributes: {
        style: {
          "border-width": "2px"
        },
        data: {
          a: "1",
          b: "2"
        }
      },
      header: {
        id: "header-main"
      }
    }
  }

  return (
    <>
      <WebDocument document={doc}>
        {/* <Body body={doc?.body} q:slot="body"> */}
        <p q:slot="body-start">This goes in Body Start</p>
        <p q:slot="body-end">This goes in Body End</p>
        <main q:slot="main">
          <p>Hello This is Main!!!</p>
        </main>
        <h1 q:slot="header">Header</h1>

        <p q:slot="footer">This goes in Footer</p>
        {/* </Body> */}
      </WebDocument>
    </>
  );
});
