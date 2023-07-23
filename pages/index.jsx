import { getSupabase } from "../utils/utils_supabase";
import Head from "next/head";
import AboutAndLastPost from "../components/about";
import Slider from "../components/slider";
import supabase from "../utils/init_supabase";

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

export default function Home({post, error}) {
  return (
    <>
      <Head>
        <title>Chukuto Planet</title>
      </Head>
      <Slider data={data} />
      <AboutAndLastPost title={post.title} id={post.id} update_at={post.updated_at}/>
    </>
  );
}

export async function getServerSideProps() {
  const {data: post, error} = await supabase.from("posts").select("*").order("updated_at").single();
  console.log(post, error);
  return {
    props: {
      post, 
      error
    }
  }
}
