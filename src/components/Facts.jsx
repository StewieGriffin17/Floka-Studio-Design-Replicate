import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Facts = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef([]);
  const deckRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        deckRef.current,
        { rotate: 0, x: 0, opacity: 0 },
        {
          rotate: (i) => (i === 0 ? -12 : i === 2 ? 12 : 0),
          x: (i) => (i === 0 ? -50 : i === 2 ? 50 : 0),
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.to(imageRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        <div className="w-full max-w-[500px] mx-auto lg:mx-0 h-[360px] sm:h-[480px] lg:w-[500px] lg:h-[600px] lg:sticky lg:top-24 self-start">
          <div className="overflow-hidden rounded-[24px] group h-full">
            <img
              ref={imageRef}
              src="/src/assets/fact1.webp"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[4px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 min-h-0 lg:min-h-[900px] w-full min-w-0">

          <div className="mb-10 sm:mb-14">
            {[
              "Consistently delivering impactful",
              "results through a perfect blend",
              "of design and functionality.",
            ].map((line, i) => (
              <h2
                key={i}
                ref={(el) => (titleRef.current[i] = el)}
                className="text-[clamp(1.5rem,4vw,3rem)] leading-[1.15] font-medium text-[#111]"
              >
                {line}
              </h2>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-full">

            <div className="bg-white p-4 sm:p-6 rounded-xl w-full flex justify-between items-start gap-3 order-1">
              <span className="text-[#7a7a7a] text-[13px] sm:text-[14px] leading-[1.4]">
                Successful projects <br /> completed
              </span>
              <span className="text-[28px] sm:text-[36px] font-medium text-[#111] shrink-0">
                2k<span className="text-[#ccc]">+</span>
              </span>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-xl w-full sm:row-span-2 flex flex-col sm:order-none order-2">
              <div className="flex gap-1 text-[#ff7a00] text-[16px] sm:text-[18px] mb-3">
                ★★★★★
              </div>

              <span className="text-[48px] sm:text-[64px] font-medium leading-none text-[#111] mb-4">
                4.9/5
              </span>

              <div className="h-[1px] bg-[#e5e5e5] mb-4 sm:mb-5"></div>

              <p className="text-[#777] text-[13px] sm:text-[14px] leading-[1.6] mb-6 sm:mb-8">
                We offer end-to-end creative solutions that make brands unforgettable.
              </p>

              <div className="flex items-center gap-3 mt-auto cursor-pointer group">
                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white transition group-hover:scale-110">
                  +
                </div>
                <span className="text-[11px] sm:text-[12px] font-semibold tracking-wide text-[#111]">
                  HIRE US NOW
                </span>
              </div>
            </div>

            <div className="bg-black text-white p-4 sm:p-6 rounded-xl w-full min-h-[220px] sm:h-[260px] relative flex flex-col justify-end order-3">

              <div className="absolute top-4 sm:top-6 left-4 right-4 sm:left-6 sm:right-6 flex justify-center">
                {[
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
                  "https://images.unsplash.com/photo-1558655146-d09347e92766",
                  "https://images.unsplash.com/photo-1551434678-e076c223a692",
                ].map((img, i) => (
                  <img
                    key={i}
                    ref={(el) => (deckRef.current[i] = el)}
                    src={img}
                    alt=""
                    className="w-[70px] h-[56px] sm:w-[90px] sm:h-[70px] object-cover rounded-lg absolute opacity-0 shadow-lg"
                  />
                ))}
              </div>

              <p className="text-[12px] sm:text-[13px] text-[#aaa] leading-[1.6] relative z-[1] pt-20 sm:pt-24">
                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
              </p>
            </div>

            <div className="relative w-full min-h-[100px] sm:h-[110px] rounded-xl overflow-hidden flex items-center px-4 sm:px-5 sm:col-span-2 order-4">
              <img
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                alt=""
              />
              <div className="relative z-10 flex justify-between w-full text-white gap-4">
                <span className="text-[13px] sm:text-[14px] leading-[1.4]">
                  Worldwide base <br /> around the world
                </span>
                <span className="text-[26px] sm:text-[32px] font-medium shrink-0">5+</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
