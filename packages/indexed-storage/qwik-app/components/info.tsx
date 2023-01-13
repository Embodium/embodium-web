import { scan, type ScanResult } from "../../src";
import { component$, useStore, useClientEffect$ } from "@builder.io/qwik";

export const DbInfo = component$(() => {
  // console.log(_props);
  const store = useStore<{ info: ScanResult }>({
    info: null
  });

  useClientEffect$(async () => {
    const scan_result = await scan();
    store.info = scan_result;
  });

  return (
    <>
      {!store.info && <span>Scanning...</span>}
      {store.info &&
       <div>
         <label>Supported: {store.info?.is_supported ? "True" : "False" }</label>
       </div>
      }
    </>
  )
});
