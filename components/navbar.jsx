import Link from "next/link";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  // TODO: En la linea 18, hay que hacer una drop-down list para que muestre las child categories (basicamente cada uno de los estudiantes, por ejemplo Luis Lima, Javier Suarez, Pedro Perez, El Pepe)
  return (
    <nav className="flex flex-wrap w-full items-center h-12 justify-center bg-slate-800 text-white rounded-b-lg fixed">
      <ul className="flex flex-row items-center justify-center gap-4 my-1">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/arch">Computer Architecture</Link>
        <Link href="/math">Mathematic</Link>
        <Link href='/students'>Students</Link>
        <Link href='/english'>English</Link>
      </ul>
    </nav>
  );
}
