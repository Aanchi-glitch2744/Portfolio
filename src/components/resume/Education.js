import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">X - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science, Jalandhar"
            subTitle="Lovely Professional University(2019 - 2023)"
            result="8.19/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="XII - PCM"
            subTitle="St. Karen's Secondary School, Patna (2018)"
            result="7.6/10"
            des='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale. (CBSE)'
          />
          <ResumeCard
            title="X - All Subjects"
            subTitle="Army Public School, Patna (2016)"
            result="8.6/10"
            des="Primary education covers ability to learn. (CBSE)"
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education