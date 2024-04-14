import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaICursor,
  FaTelegram,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { DiJavascript } from "react-icons/di";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["IT Mentor.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Gulnoza Tursunova</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursor
            cursorBlinking="true"
            cursorStyle={<FaICursor />}
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          sunt, reprehenderit, dignissimos qui totam animi dolorum laudantium
          repellat fugit magni tenetur incidunt earum quibusdam nulla deleniti
          ducimus facere molestiae neque!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="mailto:flowernozatursunova@gmail.com"
              className="bannerIcon"
            >
              <MdEmail />
            </a>
            <a href="https://t.me/nozagul" className="bannerIcon">
              <FaTelegram />
            </a>
            <a
              href="https://www.linkedin.com/in/flowernoza"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <DiJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
