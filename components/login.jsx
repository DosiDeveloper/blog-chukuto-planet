import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const supabase = createBrowserSupabaseClient();

  const handleSignIn = async ({ email, password }) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router?.refresh();
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", addcl);
        input.removeEventListener("blur", remcl);
      });
    };
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
      </Head>
      <div className="login-content">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <h1 className="title">Welcome</h1>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Email</h5>
              <input
                type="text"
                className="input"
                {...register("email", {
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
              />
              {errors.email && (
                <span className="error-display">The email is invalid</span>
              )}
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input
                type="password"
                className="input"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error-display">The password is required</span>
              )}
            </div>
          </div>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </>
  );
}
