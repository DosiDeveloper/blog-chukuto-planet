import { getSupabase } from "../utils/utils_supabase";
import Head from "next/head";
import AboutAndLastPost from "../components/about";
import Slider from "../components/slider";

// falta optimizar esta wea duran mucho cargando

const data = [
  {
    url: "/img_1.jpg",
  },
  {
    url: "/img_2.jpg",
  },
  {
    url: "/img_3.jpg",
  },
  {
    url: "/img_4.jpg",
  },
  {
    url: "/img_5.jpg",
  },
];

export default function Home({ post, error }) {
  if (error) {
    return (
      <div
        style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}
      >
        <h1>Pagina no disponible</h1>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Chukuto Planet</title>
      </Head>
      <Slider data={data} />
      <AboutAndLastPost
        title={post.title}
        id={post.id}
        updated_at={post.updated_at}
        miniature={post.miniature}
      />
    </>
  );
}

export async function getServerSideProps() {
  const { data: post, error } = await getSupabase("posts", "*");
  return {
    props: {
      post: post[0],
      error,
    },
  };
}
