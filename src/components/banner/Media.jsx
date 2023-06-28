import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs, SiEa
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" >
              <a href="https://github.com/Aanchi-glitch2744"> <FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/AanchiGlitch'> <FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/aanchiglitch/"><FaLinkedinIn /></a>
            </span>
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
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media