"use client";

import React from "react";
import { Cloud, ICloud } from "react-icon-cloud";

type ClientLogo = {
  name: string;
  logo: string;
  url: string;
};

const clients: ClientLogo[] = [
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

const cloudOptions: ICloud["options"] = {
  reverse: true,
  depth: 1,
  wheelZoom: false,
  imageScale: 2,
  activeCursor: "pointer",
  tooltip: "native",
  initial: [0.05, -0.02], // tilt for vertical-ish spin
  clickToFront: 500,
  tooltipDelay: 0,
  outlineColour: "#0000",
  maxSpeed: 0.04,
  minSpeed: 0.02,
};

export const ClientsCloudSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-24
        bg-gradient-to-b from-[#f5fcff] via-[#d4f0ff] to-[#aee1fb]
      "
    >
      {/* Soft brand-colored blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-[#1b9ce4]/45 blur-3xl" />
        <div className="absolute bottom-[-90px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase bg-white/70 text-[#11153f] mb-3">
            Trusted Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11153f] mb-3">
            Our{" "}
            <span className="text-[#f3b432]">
              DAB&apos;N&apos;KLEAN
            </span>{" "}
            Hygiene Universe
          </h2>
          <p className="text-sm sm:text-base text-[#27405a]/80">
            From modern supermarkets and e-commerce giants to hospitals and
            hotels, leading brands trust DAB&apos;N&apos;KLEAN for everyday
            hygiene and bulk tissue needs.
          </p>
        </div>

        {/* Cloud + legend */}
        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* 3D rotating logo cloud */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="
                relative
                h-[260px] w-[260px]
                sm:h-[320px] sm:w-[320px]
                lg:h-[360px] lg:w-[360px]
                rounded-full
                bg-gradient-to-br from-[#1b9ce4]/22 via-white/60 to-[#11153f]/20
                shadow-[0_22px_55px_rgba(17,21,63,0.35)]
                flex items-center justify-center
              "
            >
              <Cloud
                containerProps={{
                  style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
                options={cloudOptions}
              >
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target={client.url === "#" ? undefined : "_blank"}
                    rel={
                      client.url === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    title={client.name}
                    className="
                      flex items-center justify-center
                      rounded-full bg-white/90
                      shadow-[0_10px_30px_rgba(17,21,63,0.22)]
                      px-4 py-2
                    "
                    style={{
                      width: 110,
                      height: 54,
                    }}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                ))}
              </Cloud>
            </div>
          </div>

          {/* Legend / chips */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base text-[#27405a]/85 mb-4 lg:mb-5">
              These are just some of the names who have woven DAB&apos;N&apos;KLEAN
              into their shelves, wards, rooms and carts.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {clients.map((client) => (
                <span
                  key={client.name + "-chip"}
                  className="
                    inline-flex items-center gap-2
                    rounded-full bg-white/80
                    px-3 py-1.5
                    border border-white/90
                    text-[11px] sm:text-xs text-[#11153f]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b9ce4]" />
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCloudSection;
