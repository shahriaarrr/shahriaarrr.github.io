"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";


import "swiper/css";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
  {
    number: '01',
    category: 'CLI App',
    title: 'Tasky',
    description: 
      "Tasky is a command line application so that you can easily create and organize your TODO list.",
    stack: [{name: 'Go'}],
    image: '/assets/work/tasky.png',
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
    image: '/assets/work/tasky.png',
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
    image: '/assets/work/tasky.png',
    live: '',
    github: "https://github.com/shahriaarrr/goAuthSystem",
  },
  {
    number: '04',
    category: 'back-end',
    title: 'ُSHZAM',
    description: 
      "microblog based on the Django framework",
    stack: [{name: 'python'}, {name: 'django'}, {name: 'pillow'}, {name: 'sqlite'}],
    image: '/assets/work/tasky.png',
    live: '',
    github: "https://github.com/shahriaarrr/SHAZAM",
  },
]

const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work