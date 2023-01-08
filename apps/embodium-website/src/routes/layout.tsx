import { Layout } from "$components/layouts";
import { component$, Slot } from "@builder.io/qwik";
// import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      {/* <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      </footer> */}
      <Layout>
        <Slot></Slot>
      </Layout>
    </>
  );
});
