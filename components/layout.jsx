import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chukuto planet</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
