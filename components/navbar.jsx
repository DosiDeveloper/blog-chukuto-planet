import Link from "next/link";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  return (
    <nav className="flex flex-wrap w-full items-center h-12 justify-center bg-slate-800 text-white rounded-b-lg fixed">
      <ul className="flex flex-row items-center justify-center gap-4 my-1">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/arch-computer">Computer Architecture</Link>
        <Link href="/math">Mathematic</Link>
        {!user ? (
          <>
            <li>
              <Link href="/login">Login In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <li>
            <span> {user.email} </span>
            <Link href="/dashboard"> Dashboard </Link>
            <button
              onClick={() => {
                supabaseClient.auth.signOut();
                router.push("/");
              }}
            >
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
