import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/yourgithub",
      color: "hover:text-white",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/yourtwitter",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourlinkedin",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourinstagram",
      color:
        "hover:text-pink-500 hover:[&>svg]:hover:fill-[url(#instagramGradient)]",
    },
  ];

  return (
    <footer className="w-full bg-black text-gray-400 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Hidden SVG Gradient Definition */}
        <svg width="0" height="0">
          <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#f58529" offset="0%" />
            <stop stopColor="#dd2a7b" offset="50%" />
            <stop stopColor="#8134af" offset="75%" />
            <stop stopColor="#515bd4" offset="100%" />
          </linearGradient>
        </svg>

        {/* Social Icons */}
        <div className="flex space-x-8">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`text-2xl transition-all duration-300 ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-semibold">Nigam Yadav</span>
        </p>
      </div>
    </footer>
  );
}
