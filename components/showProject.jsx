"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaCode, FaEye, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/music.jpg",
    href: "https://music-app-omega-one-73.vercel.app/",
    url: "https://github.com/reem128-alt/music-app",
    active: "one",
  },
  {
    id: 4,
    src: "/blog.jpg",
    href: "https://blog-one-virid-60.vercel.app/en",
    active: "four",
    url: "https://github.com/reem128-alt/blog",
  },
  {
    id: 5,
    src: "/movie.jpg",
    href: "https://movie-dash-front.vercel.app/",
    active: "five",
    url: "https://github.com/reem128-alt/movie-dash-front",
  },
  {
    id: 6,
    src: "/health.jpg",
    href: "https://health-care-qw9j.vercel.app/",
    active: "six",
    url: "https://github.com/reem128-alt/health-care",
  },
  {
    id: 7,
    src: "/poll.jpg",
    href: "https://polling-tau.vercel.app/",
    active: "seven",
    url: "https://github.com/reem128-alt/polling",
  },
];

export default function ShowProject() {
  const [show, setShow] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="min-h-[450px] w-full text-slate-200 mt-12 hover:text-yellow-200 max-[430px]:min-h-[700px]">
      <div className="flex flex-row gap-2 ml-7 p-4">
        <h3 className="text-center font-bold text-2xl p-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300 mb-4">
          <span className="underline underline-offset-4 text-yellow-300">
            show{" "}
          </span>{" "}
          PROJECTS
        </h3>
        <FaArrowRight size={20} className="mt-4 hover:animate-bounce" />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mx-auto max-w-7xl px-4 mb-12"
      >
        {images.map((img, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
            className="w-full flex justify-center"
          >
            <div
              key={img.id}
              className="relative w-[280px] h-[200px] shadow-sm shadow-gray-300 max-[430px]:h-[180px] max-[430px]:w-[250px]"
              onMouseOver={() => setShow(img.active)}
              onMouseLeave={() => setShow("")}
            >
              <Image
                src={img.src}
                alt={`project-${img.id}`}
                fill
                className="rounded-md shadow-md shadow-gray-600 hover:brightness-50 "
              />

              {show === img.active && (
                <div className="absolute flex flex-row gap-2 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <Link legacyBehavior href={img.url}>
                    <a target="_blank">
                      <FaCode size={24} />
                    </a>
                  </Link>
                  <Link legacyBehavior href={img.href} passHref>
                    <a target="_blank">
                      <FaEye size={24} />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
