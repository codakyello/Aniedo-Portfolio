/* eslint-disable @next/next/no-img-element */
"use client";

import { Box } from "@chakra-ui/react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { useEffect, useState } from "react";

const selectedWorks = [
  {
    name: "Juicyway",
    description:
      "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
    images: [
      "/juicyway-bg.png",
      "/Apple-1.jpg",
      "/juicyway-bg.png",
      "/juicyway-bg.png",
      "/juicyway-bg.png",
    ],
    imageIndex: 0,
  },
  {
    name: "Apple",
    description:
      "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
    images: ["/juicyway-bg.png", "/juicyway-bg.png", "/juicyway-bg.png"],
    imageIndex: 0,
  },
  {
    name: "Juicyway",
    description:
      "I'm an art director, my experience includes in-house and agency teams with work ranging from marketing.",
    images: ["/juicyway-bg.png", "/juicyway-bg.png", "/juicyway-bg.png"],
    imageIndex: 0,
  },
];

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [works, setWorks] = useState(selectedWorks);
  const [applyBackground, setApplyBackground] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openIndex === null) {
      // Delay applying the background image by 1 second
      timer = setTimeout(() => {
        setApplyBackground(true);
      }, 500);
    } else {
      // Remove the background image immediately
      setApplyBackground(false);
    }

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount or state change
  }, [openIndex]);

  return (
    <Box
      className="min-h-screen py-[6.4rem] px-[4rem] bg-cover bg-[#020202] bg-no-repeat bg-top"
      backgroundImage={
        applyBackground
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
              const muteSound = new Audio(
                "sound/sound-charging-on-the-iphone-less-than-10.mp3"
              );
              const unmuteSound = new Audio(
                "sound/the-sound-of-setting-the-iphone-to-charge-connection.mp3"
              );

              if (isMuted) {
                // play sound
                unmuteSound.play();
              } else {
                muteSound.play();
                // stop sound
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

        <Box className="cursor-pointer justify-between items-center border-y-[1px] border-transparent hover:border-[#ffffff2f] transition-colors">
          <Box
            onClick={() => {
              // open about sound
              const openSound = new Audio(
                "/sound/CAMERA-VINTAGE_GEN-HDF-06196.wav"
              );
              const closeSound = new Audio(
                "/sound/iphone-screen-lock-shutdown-sound.mp3"
              );

              if (openIndex === 0 && !isMuted) {
                closeSound.play();
              } else if (openIndex !== 0 && !isMuted) {
                openSound.play();
              }
              setOpenIndex((index) => (index === 0 ? null : 0));
            }}
            className="cursor-pointer flex justify-between items-center"
          >
            <h2
              className={`text-[8rem] sm:text-[10rem]  ${
                openIndex === 0 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              About
            </h2>
            <Box
              className={`text-[8rem] w-[10rem] sm:text-[10rem]  ${
                openIndex === 0 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              {openIndex === 0 ? <HiOutlineMinus /> : <BsPlusLg />}
            </Box>
          </Box>

          <Box
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndex === 0 ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <p className="text-[#FFFDFD] text-[3.2rem] leading-[4.8rem] mt-[2rem] mb-[3.2rem]">
              I&apos;m a photographer and multidisciplinary creative currently
              based in Lagos, Nigeria. My experience includes in-house and
              freelancing, with projects ranging from photography and
              videography to video editing, color grading, and stop-motion
              animation.
            </p>
            <p className="text-[#FFFDFD] text-[3.2rem] leading-[4.8rem] mb-[3.2rem]">
              Previously, I’ve worked with Lagos Meet, Juicyway, The Huddle, DHK
              Designs, and more.
            </p>
            <p className="text-[#FFFDFD] mb-[8rem] text-[3.2rem] leading-[4.8rem]">
              Feel free to reach out for opportunities, collaborations, or
              requests for additional work samples.
            </p>
          </Box>
        </Box>

        <Box className="cursor-pointer py-[2.8rem] justify-between items-center border-y-[1px] border-transparent hover:border-[#ffffff2f] transition-colors">
          <Box
            className="flex justify-between"
            onClick={() => {
              const openSound = new Audio(
                "/sound/applepay-payment-sound-appstore-confirmation.mp3"
              );

              const closeSound = new Audio("/sound/selected-work-close.mp3");

              if (openIndex === 1 && !isMuted) {
                closeSound.play();
              } else if (openIndex !== 1 && !isMuted) {
                openSound.play();
              }

              setOpenIndex((index) => (index === 1 ? null : 1));
            }}
          >
            <h2
              className={`text-[8rem] sm:text-[10rem]  leading-none ${
                openIndex === 1 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              Selected Work
            </h2>
            <Box
              className={`text-[8rem] w-[10rem] sm:text-[10rem]  ${
                openIndex === 1 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              {openIndex === 1 ? <HiOutlineMinus /> : <BsPlusLg />}
            </Box>
          </Box>

          <Box
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndex === 1 ? "max-h-[10000px]" : "max-h-0"
            }`}
          >
            {works.map((work, index) => (
              <Box key={index} className="mb-[8rem]">
                <h3 className="text-[5.6rem] mt-[2rem] mb-[2.4rem]">
                  {work.name}
                </h3>
                <p className="text-[5rem] max-w-[80rem] leading-[7.2rem] text-[#808080] mb-[5.6rem]">
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
        </Box>

        <Box className="cursor-pointer justify-between items-center border-y-[1px] border-transparent hover:border-[#ffffff2f] transition-colors">
          <Box
            className="flex justify-between items-center"
            onClick={() => {
              const openSound = new Audio("/sound/longdial.wav");
              const closeSound = new Audio(
                "/sound/new-message-sound-in-app-on-iphone.mp3"
              );

              if (openIndex === 2 && !isMuted) {
                closeSound.play();
              } else if (openIndex !== 2 && !isMuted) {
                openSound.play();
              }

              setOpenIndex((index) => (index === 2 ? null : 2));
            }}
          >
            <h2
              className={`text-[8rem] sm:text-[10rem]  ${
                openIndex === 2 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              Contact
            </h2>
            <Box
              className={`text-[8rem] w-[10rem] sm:text-[10rem]  ${
                openIndex === 2 ? "text-white" : "text-[#909090E3]"
              } text-[#909090E3]`}
            >
              {openIndex === 2 ? <HiOutlineMinus /> : <BsPlusLg />}
            </Box>
          </Box>

          <Box
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndex === 2 ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <Box className="flex flex-col leading-[67.2px] text-[#FFFDFD] mb-[3.2rem] text-[5.6rem]">
              <a
                className="underline"
                href="https://www.instagram.com/aniedorichard?igsh=MTl1a2poMmR1MXhtNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="underline"
                href="https://www.instagram.com/aniedorichard?igsh=MTl1a2poMmR1MXhtNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline"
                href="https://www.instagram.com/aniedorichard?igsh=MTl1a2poMmR1MXhtNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
