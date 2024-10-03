"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";


import "swiper/css";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    number: '01',
    category: 'CLI App',
    title: 'Tasky',
    description: 
      "Tasky is a command line application so that you can easily create and organize your TODO list.",
    stack: [{name: 'Go'}],
    image: '/work/tasky.jpeg',
    live: '',
    github: "https://github.com/shahriaarrr/tasky",
  },
  {
    number: '02',
    category: 'bot',
    title: 'Discord admin bot',
    description: 
      "Moderation bot for Discord servers that provides several features to help the server staff manage and maintain the server.",
    stack: [{name: 'python'}, {name: 'discord.py'}],
    image: '/work/discord.jpeg',
    live: '',
    github: "https://github.com/shahriaarrr/discordbot",
  },
  {
    number: '03',
    category: 'back-end',
    title: 'JWT Authentication System',
    description: 
      "simple JWT authentication system built using Golang and follow the MVC architecture",
    stack: [{name: 'Go'}, {name: 'Gin-Gonic'}, {name: 'Gorm'}, {name: 'postgresSQL'}, {name: 'jwt'}],
    image: '/work/auth.jpeg',
    live: '',
    github: "https://github.com/shahriaarrr/goAuthSystem",
  },
  {
    number: '04',
    category: 'back-end',
    title: 'SAHZAM',
    description: 
      "microblog based on the Django framework",
    stack: [{name: 'python'}, {name: 'django'}, {name: 'pillow'}, {name: 'sqlite'}],
    image: '/work/SHAZAM.jpeg',
    live: '',
    github: "https://github.com/shahriaarrr/SHAZAM",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handelSlideChange = (swiper) => {
     const currentIndex = swiper.activeIndex;

     setProject(projects[currentIndex]);
  }

  return ( 
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">

              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.number}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all
              duration-500 capitalize">
                {project.title} project
              </h2>

              <p className="text-white/60 ">
                {project.description}
              </p>

              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4 ">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
                      items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
                      items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handelSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                      </div>
                    </div>
                    
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                items-center transition-all"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work