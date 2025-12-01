"use client";

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

type Client = {
  name: string;
  logo: string;
  url: string;
};

const clients: Client[] = [
  {
    name: "Ratnadeep",
    logo: "/logos/ratnadeep.png",
    url: "https://ratnadeepsupermarket.com/",
  },
  {
    name: "DMart",
    logo: "/logos/dmart.png",
    url: "https://www.dmart.in/",
  },
  {
    name: "Reliance Retail",
    logo: "/logos/reliance-retail.png",
    url: "https://www.relianceretail.com/",
  },
  {
    name: "Vijay Diagnostic",
    logo: "/logos/vijay-diagnostic.png",
    url: "https://www.vijaydiagnostic.com/",
  },
  {
    name: "Bansal Hospitals",
    logo: "/logos/bansal-hospitals.png",
    url: "https://bansalhospital.com/",
  },
  {
    name: "Red Rose Supermarket",
    logo: "/logos/red-rose.png",
    url: "#",
  },
  {
    name: "TX Hospital",
    logo: "/logos/tx-hospital.png",
    url: "https://txhospitals.in/",
  },
  {
    name: "Park Hotel",
    logo: "/logos/park-hotel.png",
    url: "https://www.theparkhotels.com/",
  },
  {
    name: "Value Zone",
    logo: "/logos/value-zone.png",
    url: "#",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    url: "https://www.amazon.in/",
  },
  {
    name: "Flipkart",
    logo: "/logos/flipkart.png",
    url: "https://www.flipkart.com/",
  },
];

export const ClientsSection = () => {
  const globeRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });

    // GSAP vertical spin (Y-axis)
    const globe = globeRef.current;
    if (!globe) return;

    tweenRef.current = gsap.to(globe, {
      rotationY: "+=360",
      transformPerspective: 1200,
      transformOrigin: "50% 50%",
      ease: "none",
      repeat: -1,
      duration: 26, // slower = bigger number
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handlePause = () => {
    tweenRef.current?.pause();
  };

  const handleResume = () => {
    tweenRef.current?.resume();
  };

  return (
    <section
      id="clients"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-24
        bg-gradient-to-b from-[#f5fcff] via-[#dbf3fa] to-[#b7e9f6]
      "
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-[#1b9ce4]/40 blur-3xl" />
        <div className="absolute bottom-[-90px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div
          className="text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <p className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase bg-white/70 text-[#11153f] mb-3">
            Trusted Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11153f] mb-3">
            A Growing{" "}
            <span className="text-[#f3b432]">
              DAB&apos;N&apos;KLEAN
            </span>{" "}
            Hygiene Network
          </h2>
          <p className="text-sm sm:text-base text-[#27405a]/80">
            Leading retailers, hospitals, hotels, and online marketplaces rely on
            DAB&apos;N&apos;KLEAN for everyday hygiene and bulk tissue supplies.
          </p>
        </div>

        {/* Globe wrapper with perspective */}
        <div
          className="mt-10 lg:mt-14 flex justify-center"
          data-aos="fade-up"
          data-aos-delay={120}
        >
          <div
            className="relative group"
            style={{ perspective: "1600px" }}
          >
            {/* This whole block spins around Y-axis */}
            <div
              ref={globeRef}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
              className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Outer rings */}
              <div className="absolute inset-[-18px] rounded-full border border-white/60" />
              <div className="absolute inset-[-34px] rounded-full border border-white/35" />

              {/* Sphere */}
              <div
                className="
                  absolute inset-0
                  rounded-full overflow-hidden
                  bg-[radial-gradient(circle_at_30%_20%,#ffffff,#dbf3fa,#1b9ce4)]
                  border border-white/85
                  shadow-lg shadow-[#11153f]/25
                "
              >
                {/* Logos grid on sphere */}
                <div
                  className="
                    absolute inset-[16%]
                    grid grid-cols-3 gap-3
                    place-items-center
                  "
                >
                  {clients.map((client) => (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/logo
                        flex items-center justify-center
                        rounded-xl bg-white/90
                        px-2 py-1.5
                        border border-white/70
                        hover:border-[#f3b432]
                        hover:bg-white
                        transition-all duration-300
                        hover:scale-105
                      "
                      title={client.name}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-7 w-auto object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>

                {/* Light highlight for 3D feel */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.9),transparent_55%)]" />
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] sm:text-xs text-[#27405a]/80">
              Globe spins vertically · hover to pause and explore each brand
            </p>
          </div>
        </div>

        {/* Extra logo chips for clarity / mobile */}
        <div
          className="mt-10"
          data-aos="fade-up"
          data-aos-delay={220}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {clients.map((client) => (
              <a
                key={`chip-${client.name}`}
                href={client.url}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-white/80
                  px-3 py-1.5
                  border border-white/80
                  text-[11px] sm:text-xs text-[#11153f]
                  hover:border-[#1b9ce4]
                  hover:bg-white
                  transition-colors
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-5 w-auto object-contain"
                  loading="lazy"
                />
                <span>{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
