import React from 'react'
import Title from '../layouts/Title'
import {projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Hotel Booking App"
                    des="A full stack (MERN) application for booking hotels, with proper API Integration for Client view, and the Admin view."
                    src={projectOne}
                    hostedLink='#'
                    github='https://github.com/Aanchi-glitch2744/BookingSystem'
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" A shopping website made with Vanilla JS to showcase deisgning capabilities. The design created is with figma, implements responsive design."
                    src={projectTwo}
                    hostedLink='#'
                    github='https://github.com/Aanchi-glitch2744/ShoppingWebsiteTemplate'
                />
                <ProjectsCard
                    title="Recipie Finder App"
                    des="A simple recipie FInder Web App created with React.JS to showcase fetched recipies from APIs. Choose a recipie like pasta to test..."
                    src={projectThree}
                    hostedLink='https://unruffled-hugle-87f5ca.netlify.app/'
                    github='https://github.com/Aanchi-glitch2744/recipe-finder'
                />
                <ProjectsCard
                    title="Pong Game"
                    des="A simple two player game made with ES6 and JavaScript, with the help of HTML Canvas for froper stimulation of the game."
                    src={projectFour}
                    hostedLink='#'
                    github='https://github.com/Aanchi-glitch2744/Pong_Game-Phaser3'
                />
                <ProjectsCard
                    title="Fire Music Visulaizer"
                    des="A cool music player made with JavaScript, jQuery implementing canvas, to vilulize the frequencies of a song. Select any mp3 file and see magic."
                    src={projectFive}
                    hostedLink='https://happy-raman-e21261.netlify.app/'
                    github='https://github.com/Aanchi-glitch2744/FireMusicVisualizer'
                />
                <ProjectsCard
                    title="Resume Builder App"
                    des="A ReactJs based Resume Builder Application which helps you to build your resume and download. You can preview on the go and much more. Try it out now!"
                    src={projectSix}
                    hostedLink='https://candid-rabanadas-98a0ed.netlify.app/'
                    github='https://github.com/Aanchi-glitch2744/Resume-Builder'
                />
            </div>
        </section>
    );
}

export default Projects