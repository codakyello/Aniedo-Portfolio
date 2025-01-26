/* eslint-disable @next/next/no-img-element */
"use client";

import { Box } from "@chakra-ui/react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [works, setWorks] = useState(() => [
    {
      name: "Juicyway",
      description:
        "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
      images: ["/Juicyway-bg.png", "/Apple-1.jpg", "/Juicyway-bg.png"],
      imageIndex: 0,
    },
    {
      name: "Apple",
      description:
        "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
      images: ["/Juicyway-bg.png", "/Juicyway-bg.png", "/Juicyway-bg.png"],
      imageIndex: 0,
    },
    {
      name: "Juicyway",
      description:
        "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
      images: ["/Juicyway-bg.png", "/Juicyway-bg.png", "/Juicyway-bg.png"],
      imageIndex: 0,
    },
  ]);

  return (
    <Box
      className="min-h-screen  p-[4rem] bg-cover bg-[#020202] bg-no-repeat bg-top"
      backgroundImage={
        openIndex === null
          ? "linear-gradient(#000000de, #000000d0), url('/juicyway-bg.png')"
          : ""
      }
    >
      <Box className="max-w-[200rem] mx-auto">
        <Box className="flex justify-between mb-[8rem]">
          <Box>
            <h1 className="text-white text-[4rem] leading-[3.5rem]">
              Aniedo Richard,
            </h1>
            <span className="text-[2.4rem] text-[#8A8A8A]">
              Visual Storyteller
            </span>
          </Box>

          <Box
            className="cursor-pointer border border-solid flex items-center justify-center border-[#fff] h-20 w-20 rounded-full p-[1rem]"
            onClick={() => {
              setIsMuted((prev) => !prev);
              if (isMuted) {
                // play sound
                const audio = new Audio(
                  "/sound/new-message-sound-in-app-on-iphone.mp3"
                );
                audio.play();
              }
            }}
          >
            {isMuted ? (
              <FaVolumeMute className="text-white text-[2.2rem]" />
            ) : (
              <FaVolumeHigh className="text-white text-[2.2rem]" />
            )}
          </Box>
        </Box>

        <Box
          onClick={() => setOpenIndex((index) => (index === 0 ? null : 0))}
          className="cursor-pointer flex justify-between items-center"
        >
          <h2
            className={`text-[11rem] ${
              openIndex === 0 ? "text-white" : "text-[#909090E3]"
            } text-[#909090E3]`}
          >
            About
          </h2>
          {openIndex === 0 ? (
            <HiOutlineMinus className="text-[#FFFDFD] text-[10rem] cursor-pointer" />
          ) : (
            <BsPlusLg className="text-[#FFFDFD] text-[10rem] cursor-pointer" />
          )}
        </Box>

        <Box
          className={`transition-max-height duration-500 mb-[2rem] ease-in-out overflow-hidden ${
            openIndex === 0 ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <p className="text-[#FFFDFD] text-[3.2rem] leading-[4.8rem] mb-[3.2rem]">
            I&apos;m an art director and multidisciplinary designer currently
            based in San Francisco. My experience includes in-house and agency
            teams with work ranging from marketing, visual, brand, editorial,
            and environmental design.
          </p>
          <p className="text-[#FFFDFD] text-[3.2rem] leading-[4.8rem] mb-[3.2rem]">
            Previously I have worked at Apple, Google, IDEO, Figma, and interned
            at Pentagram and 2x4. I studied architecture
            at Yale and Princeton and make architectural images and objects.
          </p>
          <p className="text-[#FFFDFD] mb-[8rem] text-[3.2rem] leading-[4.8rem]">
            Please reach out for opportunities, collaborations, or additional
            work sample requests.
          </p>
        </Box>

        <Box
          className="flex mb-[2rem] justify-between items-center cursor-pointer"
          onClick={() => setOpenIndex((index) => (index === 1 ? null : 1))}
        >
          <h2
            className={`text-[11rem] leading-none ${
              openIndex === 1 ? "text-white" : "text-[#909090E3]"
            } text-[#909090E3]`}
          >
            Selected Work
          </h2>
          {openIndex === 1 ? (
            <HiOutlineMinus className="cursor-pointer text-[#FFFDFD] text-[10rem]" />
          ) : (
            <BsPlusLg className="cursor-pointer text-[#FFFDFD] text-[10rem]" />
          )}
        </Box>

        <Box
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            openIndex === 1 ? "max-h-[10000px]" : "max-h-0"
          }`}
        >
          {works.map((work, index) => (
            <Box key={index} className="mb-[8rem]">
              <h3 className="text-[5.6rem] mb-[2.4rem]">{work.name}</h3>
              <p className="text-[5.6rem] w-[80rem] leading-[7.2rem] text-[#808080] mb-[5.6rem]">
                {work.description}
              </p>
              <img
                className="w-[100rem] h-auto cursor-pointer"
                onClick={() =>
                  setWorks((works) =>
                    works.map((work, i) =>
                      i === index
                        ? {
                            ...work,
                            imageIndex:
                              work.imageIndex + 1 === work.images.length
                                ? 0
                                : work.imageIndex + 1,
                          }
                        : work
                    )
                  )
                }
                alt="juicyway"
                src={work.images[work.imageIndex]}
              />
              <p className="text-[#808080] mt-[2.4rem] text-[5.6rem]">
                {work.imageIndex + 1}/{work.images.length}
              </p>
            </Box>
          ))}
        </Box>

        <Box
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenIndex((index) => (index === 2 ? null : 2))}
        >
          <h2
            className={`text-[11rem] ${
              openIndex === 2 ? "text-white" : "text-[#909090E3]"
            } text-[#909090E3]`}
          >
            Contact
          </h2>
          {openIndex === 2 ? (
            <HiOutlineMinus className="text-[#FFFDFD] text-[10rem]" />
          ) : (
            <BsPlusLg className="text-[#FFFDFD] text-[10rem]" />
          )}
        </Box>

        <Box
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            openIndex === 2 ? "max-h-[2000px]" : "max-h-0"
          }`}
        >
          <Box className="flex flex-col leading-[67.2px] text-[#FFFDFD] mb-[3.2rem] text-[5.6rem]">
            <a className="underline" href="#">
              Email
            </a>
            <a className="underline" href="#">
              LinkedIn
            </a>
            <a className="underline" href="#">
              Instagram
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
