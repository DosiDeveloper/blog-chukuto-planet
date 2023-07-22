import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Navbar() {
  const [isMobileMenuVisible, SetIsMobileMenuVisible] = useState(false);
  const { handleSubmit } = useForm();
  const router = useRouter();
  const user = useUser();
  const supabase = createBrowserSupabaseClient()
  const toggleMobileMenu = () => {
    SetIsMobileMenuVisible(!isMobileMenuVisible);
  };
  // mrk el que lo lea
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };


  useEffect(() => {
    const iconMobile = document.querySelector(".icon.nav-icon");

    const handleButtonMobile = () => {
      iconMobile.classList.toggle("open");
    };
    iconMobile.addEventListener("click", handleButtonMobile);

    return () => {
      iconMobile.removeEventListener("click", handleButtonMobile);
    };
  }, []);
  return (
    <nav className={`navbar`}>
      <a className="navbar__logo" href='/'>
        <img src="/logo.jpg" alt="logo" />
      </a>
      <div className="icon nav-icon" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`menu ${
          isMobileMenuVisible ? "menu--visible" : "menu--invisible"
        }`}
      >
        <li className="menu__item">
          <Link href="/posts">All Posts</Link>
        </li>
        {user ? (
          <li className="menu__item">
            <Link href="/homeworks">Homeworks</Link>
          </li>
        ) : (
          ""
        )}
        <li className="menu__item_login">
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <button className="menu__item_login" onClick={handleSignOut}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
