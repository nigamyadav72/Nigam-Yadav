import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/nigamyadav72",
      color: "hover:text-white",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/NIGAM22370630",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/nigamyadav72",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/nigamyadav72/",
      color:
        "hover:text-pink-500 hover:[&>svg]:hover:fill-[url(#instagramGradient)]",
    },
  ];

  return (
    <footer className="w-full bg-black text-gray-400 py-14">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
        {/* Hidden SVG Gradient Definition */}
        <svg width="0" height="0">
          <linearGradient
            id="instagramGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
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
              className={`text-3xl transition-all duration-300 ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-xl">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-semibold">Nigam Yadav</span>
        </p>

        {/* Gita Shloka */}
        <motion.p
          className="text-center text-lg md:text-xl font-medium bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । <br />
          मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि ॥
        </motion.p>
        <p className="text-sm text-gray-500 italic">
          — Bhagavad Gita, Chapter 2, Verse 47
        </p>
      </div>
    </footer>
  );
}
