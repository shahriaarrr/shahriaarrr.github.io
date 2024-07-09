"use client";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue, SelectLabel } from "@/components/ui/select";

import { FaEnvelope, FaSkype, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaSkype />,
    title: "Skype",
    description: "live:.cid.4c984639e045e50a",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahriaarrr@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Mashhad, Iran",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* forms */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
                Let's connect together
              </h3>

              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First name"
                />

                <Input
                  type="lastname"
                  placeholder="Last name"
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                />

                <Input
                  type="phone"
                  placeholder="Phone number"
                />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web development</SelectItem>
                    <SelectItem value="cst">Discord development</SelectItem>
                    <SelectItem value="mst">Project management</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />

              {/* button */}
              <Button
                size="md"
                className="max-w-40"
              >
                send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end mb-8 xl:mb-0 xl:order-none">
            <ul className="flex flex-col gap-10"> {info.map((item, index) => {
              return ( 
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                    text-accent rounded-md flex items-center justify-center"
                  >
                    <div className="text-4xl"> {item.icon} </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li> 
              )})} 
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact