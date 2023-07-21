import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
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
      <div className="navbar__logo">
        <img src="/logo.png" alt="logo" />
      </div>
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
          <Link href="/">Index</Link>
        </li>
        <li className="menu__item">
          <Link href="/posts">Posts</Link>
        </li>
        {user ? (
          <li className="menu__item">
            <Link href="/homeworks">Homework</Link>
          </li>
        ) : (
          ""
        )}
        <li className="menu__item">
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <button onClick={handleSignOut}>
              log out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
