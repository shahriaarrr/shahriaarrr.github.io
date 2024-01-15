// next links
import Link from "next/link";

//icons
import {RiYoutubeLine, RiInstagramLine, RiGithubLine, RiTelegramLine, RiLinkedinLine} from 'react-icons/ri';


const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://youtube.com/@shahriaarrr'} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>

    <Link href={'https://github.com/shahriaarrr'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>

    <Link href={'https://linkedin.com/in/shahriaarrr'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>

    <Link href={'https://t.me/shahriaarrr12'} className="hover:text-accent transition-all duration-300">
      <RiTelegramLine />
    </Link>

    <Link href={'https://instagram.com/shahriaarrr121'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
  </div>;
};

export default Socials;
