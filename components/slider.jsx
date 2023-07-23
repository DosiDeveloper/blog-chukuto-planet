import { useEffect, useState } from "react";

export default function Slider({ data: slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    slidesAnimation("fadeIn");
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slidesAnimation("fadeIn");
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex > currentIndex) {
      setCurrentIndex(slideIndex);
      slidesAnimation("fadeIn");
    } else {
      setCurrentIndex(slideIndex);
      slidesAnimation("fadeIn");
    }
  };

  const slidesAnimation = (animation_name, prefix = "animate__") => {
    const animation = `${prefix}${animation_name}`;
    const elem = document.querySelector(".slides.animate__animated");
    elem.classList.add(animation);
    elem.addEventListener("animationend", (e) => {
      e.stopPropagation();
      elem.classList.remove(animation);
    });
  };

  // Timer to change to next slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  const slideStylesWidthBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[currentIndex].url})`,
  };
  if (!slides) {
    return <h1>Data not found</h1>;
  }
  return (
    <>
      <div className="slider-container">
        <section>
          <button onClick={goToPrevious} className="left-arrow">
            ❰
          </button>
          <button onClick={goToNext} className="right-arrow">
            ❱
          </button>
        </section>
        <section
          style={slideStylesWidthBackground}
          className="slides animate__animated"
        >
          <div className="post-description-slide">
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].description}</p>
          </div>
        </section>
        <section className="dot-container">
          {slides.map((_slide, slideIndex) =>
            slideIndex === currentIndex ? (
              <div
                className="dot active"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ) : (
              <div
                className="dot"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            )
          )}
        </section>
      </div>
    </>
  );
}
