import Link from "next/link";

export default function About() {
  return (
    <section className="article-about-container">
      <section className="about-container">
        {/* <About /> */}
      </section>
      <section className="article-container">
        <article className="article">
          <img
            src="https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-tunel-pavimento-interior-vacio.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="imagen"
          />
          <h1>hola mundo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            porro, fuga assumenda temporibus nisi velit suscipit amet iusto
            doloremque cupiditate neque sed sint quaerat nam. Sint porro veniam
            atque deserunt.
          </p>
          <div className="container-info">
            <span>11 / 09 / 2023</span>
            <Link href="#" className="button-link">
              Go to the post!
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
}
