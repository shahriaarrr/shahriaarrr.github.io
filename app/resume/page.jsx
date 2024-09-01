"use client";

// skill's icons
import {
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaDiscord,
  FaDatabase,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiDjango, SiRedis } from "react-icons/si";

import { motion } from "framer-motion";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
   title: "About me",
   description: "I was interested in the world of computers since I was a child, and this interest reached it's peak when I was 12 years old, and from the past 3 years until now, I have been working as a freelance developer. Since then I have done many projects and worked remotely for companies as well as collaborating on open source projects",
   info: [
    {
      fieldName: "Name",
      fieldValue: "Shahriar Ghasempour",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iranian",
    },
    {
      fieldName: "Email",
      fieldValue: "shahriaarrr@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Persian, English",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:.cid.4c984639e045e50a",
    },
   ],
}

// const experience = {
//   icons: '/resume/badge.svg',
//   title: 'my experience',
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//   items:[
//     {
//       company: "abcd",
//       position: "abc",
//       duration: "",
//     }
//   ],
// }

const certificates = {
  icons: '/resume/cap.svg',
  title: "My Certificates",
  description: "I'm interested in learning and experiencing new things. Here you can see a part of my learning path",
  items: [
    {
      institution: "Harvard University",
      degree: "CS50X",
      duration: "Sep 2023",
    },
    {
      institution: "Code With Mosh",
      degree: "The Ultimate Docker Course",
      duration: "Mar 2023",
    },
    {
      institution: "Udemy",
      degree: "Python Django - Complete Course",
      duration: "Jul 2022",
    },
    {
      institution: "Maktabkhooneh",
      degree: "Python Programming for Beginners ",
      duration: "Jul 2021",
    },
    {
      institution: "Maktabkhooneh",
      degree: "Python Programming for Beginners ",
      duration: "Jul 2021",
    },
    {
      institution: "Maktabkhooneh",
      degree: "Introduction to Programming with Java",
      duration: "Feb 2021",
    },
  ],
}

const skills = {
  title: "My Skills",
  description: "showcases my expertise in various technologies and tools, highlighting my proficiency and experience.",
  skillList:[
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <FaGolang />,
      name: "GOlang",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaLinux />,
      name: "GNU/Linux",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaDiscord />,
      name: "Discord.py",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
  ],
}


const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60 ">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                                flex justify-center items-center group"
                              >
                                <div className="text-6xl group-hover:text-accent transition-all
                                  duration-300"
                                >
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Certificates */}
            <TabsContent value="certificates" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {certificates.title}
                </h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certificates.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificates.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>

                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent">
                            </span>

                            <h3 className="text-white/60">
                              {item.institution}
                            </h3>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume