import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/errol-dmell0/" target="_blank" rel="noopener noreferrer" className="bg-white text-black text-base p-2 rounded-full hover:bg-gray-300 transition"><FaLinkedinIn /></a>
          <a href="https://github.com/erroldmell0" target="_blank" rel="noopener noreferrer" className="bg-white text-black text-base p-2 rounded-full hover:bg-gray-300 transition"><FaGithub /></a>
          <a href="https://leetcode.com/u/erroldmell0/" target="_blank" rel="noopener noreferrer" 
          className="bg-white text-black text-base p-2 rounded-full hover:bg-gray-300 transition"><SiLeetcode /></a>
          <a href="https://www.codechef.com/users/erroldmell0" target="_blank" rel="noopener noreferrer" 
          className="bg-white text-black text-base p-2 rounded-full hover:bg-gray-300 transition"><SiCodechef /></a>
          <a href="https://codeforces.com/profile/erroldmell0" target="_blank" rel="noopener noreferrer" 
          className="bg-white text-black text-base p-2 rounded-full hover:bg-gray-300 transition"><SiCodeforces /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <a href="mailto:erroldmello2005@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition">
            <IoMdMail /> erroldmello2005@gmail.com</a>
          <a href="tel:+919359669277" className="flex items-center gap-2 hover:text-amber-400 transition">
            <FaPhoneAlt /> +91 9359669277</a>
        </div>

        <hr className="border-t border-gray-500 w-1/2" />

        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Errol D&apos;mello. Designed by Errol D&apos;mello.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
