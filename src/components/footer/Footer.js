import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa";
import {logo, aanchalImg} from "../../assets/index"
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        {navLinksdata.map(({ _id, title, link }) => (
            <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
            >
              <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                {title}
              </Link>
            </li>
        ))}
        </ul>
        {/*<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">*/}
        {/*  <li>*/}
        {/*    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">*/}
        {/*      About*/}
        {/*      <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">*/}
        {/*      Projects*/}
        {/*      <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">*/}
        {/*      Features*/}
        {/*      <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">*/}
        {/*      Resume*/}
        {/*      <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">*/}
        {/*      Contact*/}
        {/*      <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>*/}
        {/*    </span>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          WORK RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://github.com/Aanchi-glitch2744">GitHub</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <img src={aanchalImg} style={{maxWidth: '10rem', borderRadius: '2.5rem'}}/>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Aanchal Kumari
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer