import React, {useState} from "react";

import Avatar from '../../components/Avatar';
import Circle from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

import {FaPython, FaJava, FaDocker, FaGithub} from "react-icons/fa"
import {SiDjango, SiFlask, SiFastapi, SiNumpy, SiPandas, SiLinux} from 'react-icons/si';
import {BsGit} from 'react-icons/bs';

import CountUp from "react-countup";

//  edit about section icons in about page
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming languages',
        icons: [
          <FaPython />,
          <FaJava />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <SiDjango />,
          <SiFlask />,
          <SiFastapi />,
        ],
      },
      {
        title: 'Data Science',
        icons: [
          <SiNumpy />,
          <SiPandas />,
        ],
      },
      {
        title: 'Tools',
        icons: [
          <BsGit />,
          <FaGithub />,
          <SiLinux />,
          <FaDocker />,
        ],
      },
    ],
  },
 {
    title: 'Education',
    info: [
      {
       title: 'B.Sc. Computer engineering - University of Birjand',
       stage: '2020 - now',
     },
   ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Back-End developer - pelekan',
        stage: '2023 - now',
      },
      {
        title: 'Teaching assistant - CS50x Tehran',
        stage: '2023 - now',
      },
      {
        title: 'Programming instructor - Quera',
        stage: 'Aug2021 - Oct2021',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'The Ultimate Docker Course - Code With Mosh',
        stage: '2023',
      },
      {
        title: 'Task-Oriented Course In Version Control With Git - Quera',
        stage: '2023',
      },
      {
        title: 'Python Django-Complete Course - Udemy',
        stage: '2022',
      },
      {
        title: 'Introduction to Programming with Java - Maktabkhooneh',
        stage: '2021',
      },
      {
        title: 'Python Programming for Beginners - Maktabkhooneh',
        stage: '2021',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circle />

      {/* Avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[190px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
        <div className="flex-1 flex flex-col justify-center my-6">
          <motion.h2
           variants={fadeIn('right', 0.2)}
           initial="hidden"
           animate='show'
           exit='hidden'
           className="h2"
          >
            <span className="text-accent">Adventurous</span> spirit creates new things
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-12 xl:px-0"
          >
          I was interested in the world of computers since I was a child,
          and this interest reached it's peak when I was 12 years old, and from the past 3 years until now,
          I have been working as a freelance developer.
          Since then I have done many projects and worked remotely for companies as well as collaborating on open source projects
          </motion.p>

          {/* counter */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate='show'
            exit='hidden' 
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* experiance */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  years of experiance 
                </div>
              </div>

              {/* satisfied clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Satisfied clients
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0 ">
                {/* Finished project */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={6} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]:">
                  Finished projects
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate='show'
          exit='hidden' 
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize  xl:text-lg relative after:w-8
                after:h-[2px] after:bg-white after:absolute
                after:-bottom-1 after:left-0`} 
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                items-center text-white/60">

                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return <div className="text-2xl">
                          {icon}
                        </div>;
                      })}
                    
                  </div>
                  
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;


