import { Post_miniature } from "../components/post";
import { getSupabase } from "../utils/utils_supabase";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/about";
import Slider from "../components/slider";

// falta optimizar esta wea duran mucho cargando

const data = [
  {
    url: "http:///localhost:3000/img_1.jpg",
  }
  // {
  //   url: "http:///localhost:3000/img_2.jpg",
  // },
  // {
  //   url: "http:///localhost:3000/img_3.jpg",
  // },
  // { 
  //   url: "http:///localhost:3000/img_4.jpg",
  // },
  // {
  //   url: "http:///localhost:3000/img_5.jpg",
  // },
];

export default function Home() {
  const [lastPost, setLastPost] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSupabase("posts", "*")
      .then((data) => {
        setLastPost(data.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Head>
        <title>Chukuto Planet</title>
      </Head>
      {/* {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            lastPost.map(post => {
              return <Post_miniature key={post.id} title={post.title} />;
            })
          )} */}
      <Slider data={data} />
      <About />
    </>
  );
}
