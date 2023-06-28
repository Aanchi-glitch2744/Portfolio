import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Experience...</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front End Developer With ReactJs"
            subTitle="Revfin Services Pvt. Lmt."
            result="July 2022 - Present"
            des="Worked on various functional components of the existing website and created several pages from scratch. Implemented
            API Integration and also created wire frames and XML for Android applications, as well as assisted on backend tasks. Implemented Video KYC feature using Twillio plugin, E-mandate process, and integrated payment gateways. Tech Stack : React.js, JavaScript, XML, HTML, CSS, Bootstrap, Figma, Git"
          />
          <ResumeCard
            title="Celebal Technologies"
            subTitle="ReactJs Developer"
            result="June - July 2022"
            des="Designed Ui with the help of Figma and created stand alone projects. Also, collaborated with backend developers for API integration. Team’s support for responsiveness of the application. Tech Stack : React.js, JavaScript, HTML, CSS, Bootstrap, Figma, Git."
          />
          <ResumeCard
            title="Front End Developer"
            subTitle="Eduladder"
            result="Nov 2021 - May 2022"
            des="Improved and developed on designing a new interface from the scratch, and fixed minor bugs in the backend. Tech Stack : HTML, CSS, JavaScript, Bootstrap, PHP."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
