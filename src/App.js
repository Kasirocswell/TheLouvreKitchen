import { useEffect } from "react";
import img from "../src/img/logo.PNG";

const Desktop1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-white w-full flex flex-col p-[10px] box-border items-center justify-center text-center text-base text-black font-josefin-slab">
      <div className="relative w-[1500px] h-[1570px] shrink-0 mt-[50] lg:mt-[-75]">
        <img
          className="absolute top-[237px] left-[0px] w-[1500px] h-[795px] object-cover [&.animate]:animate-[2s_ease_0s_1_normal_both_slit-in-vertical] opacity-[1] [&.animate]:lg:animate-[2s_ease_0s_1_normal_both_slit-in-vertical] lg:opacity-[1] sm:[resize:both]"
          alt=""
          src={img}
          data-animate-on-scroll
        />
        <p className="m-[0] absolute top-[878px] left-[591px] font-bold inline-block">
          Order Now
        </p>
        <p className="m-[0] absolute top-[134px] left-[665px] tracking-[0.2em] font-bold text-left inline-block">
          Menu
        </p>
      </div>
    </div>
  );
};

export default Desktop1;

