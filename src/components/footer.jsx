import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { 
      icon: <FaGithub className="text-white" />, 
      href: "https://github.com/nigamyadav72",
      bg: "bg-black",
      hoverBg: "from-black/40 via-black/30 to-black/20"
    },
    { 
      icon: <FaTwitter className="text-white" />, 
      href: "https://twitter.com/NIGAM22370630",
      bg: "bg-[#1DA1F2]",
      hoverBg: "from-[#1DA1F2]/40 via-[#1DA1F2]/30 to-[#1DA1F2]/20"
    },
    { 
      icon: <FaLinkedin className="text-white" />, 
      href: "https://www.linkedin.com/in/nigam-yadav-099447199/",
      bg: "bg-[#0077B5]",
      hoverBg: "from-[#0077B5]/40 via-[#0077B5]/30 to-[#0077B5]/20"
    },
    { 
      icon: <FaInstagram className="text-white" />, 
      href: "https://instagram.com/your_instagram",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      hoverBg: "from-yellow-400/40 via-pink-500/30 to-purple-600/20"
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 text-gray-700 py-16 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Social Links */}
        <div className="flex gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }} // smaller hover pop
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full ${social.bg} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Background hover effect */}
              <span
                className={`absolute w-full h-full rounded-full bg-gradient-to-r ${social.hoverBg} opacity-30 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500`}
              ></span>

              {/* Icon */}
              <span className="relative text-xl"> {/* smaller icon */}
                {social.icon}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[2px] w-2/3 bg-gray-300 rounded-full mt-4" />

        {/* Signature */}
        <p className="text-lg md:text-xl text-gray-700 mt-4 text-center">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-bold text-gray-900">Nigam Yadav</span>
        </p>
      </div>
    </footer>
  );
}
