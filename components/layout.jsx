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
      <main className="flex min-h-screen flex-col items-center justify-between pt-16 pb-5 px-5">
        {children}
      </main>
      <Footer />
    </>
  );
}
