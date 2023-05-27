import { Post_miniature } from "../components/post";
import supabase from "../utils/init_supabase";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home({ last_post }) {
  const [lastPost, setLastPost] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("post")
      .select("*")
      .then((data) => {
        setLastPost(data.data)
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  });

  return (
    <>
      <Head>
        <title>Name post Here</title>
      </Head>
      <section className="flex flex-col place-items-center content-center bg-slate-700 h-screen w-4/5 lg:w-4/6 rounded-md p-3">
        <h1 className="text-xl font-bold capitalize p-2 mx-auto">
          The Lasted Blog posted
        </h1>
        <div className="grid md:grid-cols-2 gap-2 place-items-center content-center h-full">
          {isLoading ? (
            <h1>Loading ...</h1>
          ) : (
            lastPost.map((post) => {
              return <Post_miniature key={post.id} name={post.name} />;
            })
          )}
        </div>
      </section>
    </>
  );
}
