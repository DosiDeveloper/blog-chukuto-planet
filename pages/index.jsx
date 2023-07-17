import { Post_miniature } from "../components/post";
import { getSupabase } from "../utils/utils_supabase";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/about";
import Slider from "../components/slider";

const data = [
  {
    title: "lorem ipsum titulo",
    description: "una description sencilla",
    url: "https://imgur.com/LbBqmJ9",
  },
  {
    title: "lorem ipsum titulo2",
    description: "una description sencilla",
    url: "https://imgur.com/dM0QAEA",
  },
  {
    title: "lorem ipsum titulo3",
    description: "una description sencilla",
    url: "http:///localhost:3000/favicon.ico",
  },
  {
    title: "lorem ipsum titulo4",
    description: "una description sencilla",
    url: "https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-edificio-cielo-azul-urbano-pueblo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    title: "lorem ipsum titulo5",
    description: "una description sencilla",
    url: "https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-flores-insecto-mariposa-floracion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    title: "lorem ipsum titulo6",
    description: "una description sencilla",
    url: "https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-tunel-pavimento-interior-vacio.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
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
