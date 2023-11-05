import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Layout from "../components/layout";
import "../styles/globals.css";
import { useState } from "react";
import supabase from "../utils/init_supabase";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => supabase.instance);

  return (
    <>
      <Head>
        <link rel="icon" href="logo.png" sizes="any" />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionContextProvider>
    </>
  );
}
