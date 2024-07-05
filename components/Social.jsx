import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socials = [
    {
        icon: <FaGithub />,
        path: ''
    },
    {
        icon: <FaLinkedin />,
        path: ''
    },
    {
        icon: <FaYoutube />,
        path: ''
    },
    {
        icon: <BsTwitterX />,
        path: ''
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social