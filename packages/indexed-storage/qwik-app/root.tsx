import { DbInfo } from "./components/info";
import { DocumentDescriptor, WebDocument, Viewport } from "@embodium-web/web-document";

export default () => {
  const document: DocumentDescriptor = {
    head: {
      metadata: {
        ['application-name']: "",
        // charset?: string;
        ['color-scheme']: 'normal',
        creator: ["nranjan@embodium.org", "engineering@embodium.org"],
        custom: [{ alias: 'property', name: 'og:property1', content: 'Nalin', additional: { 'k1': "1" } }],
        description: "A library developed by Embodium for accessing indexedDB",
        generator: "Nalin Ranjan",
        /*     googlebot?: Array<Robot>; */
        keywords: ["Embodium", "indexedDB", "Indexed", "Access", "Storage"],
        pragma: {
          ['content-language']: 'hi-hi',
          ['content-type']: 'text/html',
          ['default-style']: 'none',
          refresh: { interval: -3, url: "/" },
          ['set-cookie']: 'xxx',
          ['x-ua-compatible']: 'IE=edge',
          ['content-security-policy']: ''
        },
        publisher: "embodium.org",
        referrer: 'no-referrer',
        robots: ["nofollow", "index"],
        ['theme-color']: '  ',
	title: "Indexed Storage TestApp",
        viewport: { width: 1 } as Viewport
      }
    },
    body: {
      header: {
	id: "header-main"
      }
    }
  }

  return (
    <>
      <WebDocument document={document}>
        <h1 q:slot="header">Indexed Storage Application</h1>
        <DbInfo />
      </WebDocument>
    </>
  );
};
