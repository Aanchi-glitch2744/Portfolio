import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
                    <h2 className="text-4xl font-bold">Achievements</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="4th position in Game Dev"
                        subTitle="HackTheNorth Hackaton (Feb 2022)"
                        result="Asia"
                        des="Bagged 4th position for creating a game called Sospito, which is a UFO based game to track and kill enemy spaceships."
                    /><ResumeCard
                        title="7th position in Location App"
                        subTitle="Treck Hack Hackaton (Jan 2022)"
                        result="USA"
                        des="Bagged 7th position with team for develpoing a location channel app Spots, which can anonymously search and post Tourist Locations."
                    /><ResumeCard
                        title="Hacktoberfest"
                        subTitle="Hactoberfest (2019 - Present)"
                        result="World"
                        des="Active contributer to the Hactoberfest by GitHub, for 4 years now..."
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
                    <h2 className="text-4xl font-bold">Leadership/ Extracurricular</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="DilSe Team Member"
                        subTitle="Revfin - ( Sep 2022 - Present)"
                        result="New Delhi"
                        des="• Took part in various campaigns such as E-Vehicle and waste management awareness and supported events in company. Visited and donated to old age homes, blind schools and homeless people. Actively participated in social binding."
                    />
                    <ResumeCard
                        title="Campus Ambassador"
                        subTitle="Board Infinity - (Dec 2019 -2022)"
                        result="LPU Jalandhar, Punjab"
                        des="Served as campus ambassador of Board Infinity for 2 years, interacted with students and increased the reach of board infinity’s initiatives among the students."
                    />
                    <ResumeCard
                        title="NSS Member"
                        subTitle="LPU (Aug 2019 - Dec 2019)"
                        result="LPU Jalandhar, Punjab"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Achievement;