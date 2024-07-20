"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

import {fadeIn} from '../variants';

import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            <h2 className="h1 mb-6">
              Hello I'm <br/><span className="text-accent">Shahriar Ghasempour</span>
            </h2>

            <motion.h3 
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h3'
            >
              <span className="text-xl">
              <Typewriter 
                  options={{
                    strings: [
                      'python developer',
                      'back-end developer',
                      'content creator',
                      'discord.py developer',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 0.4,
                  }}
                />
              </span>
            </motion.h3>

            <p className="max-w-[500px] mb-9 text-white/90 ">
            A highly motivated Python/Django developer with a passion for programming and learning.

            </p>

            {/* btn and social medias */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home
