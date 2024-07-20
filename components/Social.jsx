import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/shahriaarrr'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://linkedin.com/in/shahriaarrr'
    },
    {
        icon: <FaYoutube />,
        path: 'https://youtube.com/@shahriaarrr'
    },
    {
        icon: <FaTelegramPlane />,
        path: 'https://t.me/shahriaarrr'
    },
    {
        icon: <BsTwitterX />,
        path: 'https://x.com/shahriaarrr'
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