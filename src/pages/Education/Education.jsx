import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "High School",
      school: "Rosy Buds Boarding School",
      mascot: "📘",
      year: "2019-2021",
      achievements: ["GPA: 3.22", "Subject: Science"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
    {
      degree: "Bachelor in Computer Engineering",
      school: "IOE Purwanchal Campus",
      mascot: "💻",
      year: "2022-current",
      achievements: ["GPA: __", "Specialization: Computer Science & Engineering"],
      skills: [
        "Programming (C, C++, Python, JavaScript)",
        "Data Structures & Algorithms",
        "Database Management (MySQL, PostgreSQL, MongoDB)",
        "Web Development (React, Node.js, Express, Next.js)",
        "Machine Learning & Artificial Intelligence",
        "Computer Networks & Operating Systems",
        "Software Engineering & Project Management",
      ],
      description:
        "Gained expertise in computer science fundamentals, software engineering, and problem-solving. Developed projects in full-stack web development, AI/ML, and system design, while building strong analytical, programming, and teamwork skills.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex"
            >
              {/* Watery glow effect */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverBackground"
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}

              {/* Card Content */}
              <motion.div
                animate={
                  hoveredIndex === index
                    ? { scale: 1.05, y: -5 }
                    : { scale: 1, y: 0 }
                }
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/60 backdrop-blur-md min-h-full w-full
                  ${
                    hoveredIndex === index
                      ? "border-purple-400 shadow-xl shadow-purple-500/30"
                      : "border-blue-400/20"
                  }`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{edu.mascot}</span>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm italic border-l-2 border-purple-500 pl-3">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 flex items-center gap-2 text-sm"
                        >
                          <Award className="w-4 h-4" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-pink-500/10 text-pink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
