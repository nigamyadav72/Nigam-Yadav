
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 text-white bg-[#04081A] overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Developer, Designer & Creator
          </span>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </motion.h2>

        {/* Content */}
        <div className="grid gap-12 sm:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img
              src="assets/images/hero.jpeg"
              alt="About illustration"
              className="relative rounded-2xl shadow-xl border border-white/10"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p className="text-zinc-300">
              Hello! I'm <span className="font-semibold text-white">Nigam Yadav</span>, 
              a passionate <span className="text-purple-400">full-stack developer</span> 
              with a love for turning ideas into powerful digital experiences.
              I specialize in crafting elegant, user-friendly interfaces and 
              building backend systems that create seamless end-to-end applications.
            </p>
            <p className="text-zinc-300">
              With a strong foundation in JavaScript and modern web technologies, 
              I thrive on solving complex problems and delivering innovative solutions. 
              My mission is to make web development{" "}
              <span className="text-blue-400">faster, smarter, and more accessible</span>, 
              while continuously pushing the boundaries of what’s possible on the web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
