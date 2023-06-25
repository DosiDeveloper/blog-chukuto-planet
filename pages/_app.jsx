import Layout from "../components/layout";
import "../styles/globals.css";
import { useState } from "react";

// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas
export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
