import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import supabase from "../utils/init_supabase";

export default function Navbar() {
  const [isMobileMenuVisible, SetIsMobileMenuVisible] = useState(false);
  // const { handleSubmit } = useForm();
  const router = useRouter();
  const user = useUser();
  const toggleMobileMenu = () => {
    SetIsMobileMenuVisible(!isMobileMenuVisible);
  };
  // mrk el que lo lea
  const handleSignOut = async () => {
    await supabase.instance.auth.signOut();
    router.push("/")
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
      <Link className="navbar__logo" href='/'>
        <img src="/logo.png" alt="logo" />
      </Link>
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
          <Link href="/posts">Latest Posts</Link>
        </li>
        {user ? (
          <li className="menu__item">
            <Link href="/homeworks">Homeworks</Link>
          </li>
        ) : (
          ""
        )}
        <li>
          {!user ? (
            <Link href="/login" className="login-img">
              <img src="/login-logo.png"/>
            </Link>
          ) : (
            <div className="logout-img" onClick={handleSignOut}>
              <img src="/logout-logo.png"/>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
