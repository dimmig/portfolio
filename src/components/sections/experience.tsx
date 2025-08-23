"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

const experiences = [
  {
    year: "2024 - Present",
    title: "AirTrail",
    role: "Middle Software Developer",
    company: "Tech Company",
    location: "Remote",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
      "Reduced bug reports by 60%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
    color: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    year: "2023 - 2024",
    title: "Alura",
    role: "Founder",
    company: "Independent",
    location: "Remote",
    description: "Designed and developed an online language learning platform with a responsive and user-friendly interface.",
    achievements: [
      "Launched platform to over 1,000 active users in first 3 months",
      "Improved backend efficiency by 30% through optimized queries",
      "Increased scalability with containerized microservices",
      "Delivered multilingual UI for global users"
    ],
    technologies: ["React.js", "Golang", "Docker", "Kubernetes", "PostgreSQL"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    year: "2022 - 2022",
    title: "APYS Trainee",
    role: "Frontend Developer",
    company: "Digital Agency",
    location: "On-site",
    description: "Created responsive and interactive web applications. Collaborated with designers to implement pixel-perfect designs.",
    achievements: [
      "Developed 5+ client projects",
      "Improved UI/UX workflows",
      "Implemented responsive designs",
      "Learned modern web technologies"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "GraphQL"],
    color: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
];

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Computer Science",
    institution: "University Of Silesia, Katowice",
    location: "Katowice, Poland",
    description: "Graduated with honors. Focused on software engineering and web development.",
    achievements: [
      "Dean's List all semesters",
      "Led student coding club",
      "Participated in hackathons",
      "Research assistant"
    ],
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Career Journey
            </h3>
            <div className="relative" ref={containerRef}>
              {/* Timeline Line Container */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                {/* Background Line */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full" />
                
                {/* Animated Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"
                  style={{
                    height: "100%",
                    scaleY: scaleX,
                    transformOrigin: "top"
                  }}
                />
              </div>
              
              {/* Experience Items */}
              <div className="space-y-24">
                {experiences.map((exp, index) => (
                  <div key={exp.year} className="relative">
                    {/* Timeline Dot with Ripple Effect */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`w-6 h-6 rounded-full ${exp.color} shadow-lg z-20`}
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { 
                          scale: [0, 1.5],
                          opacity: [0, 0.3, 0]
                        } : {}}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                        className={`absolute w-6 h-6 rounded-full ${exp.color} z-10`}
                      />
                    </div>
                    
                    {/* Content Card */}
                    <motion.div
                      initial={{ 
                        opacity: 0,
                        x: index % 2 === 0 ? 50 : -50,
                        y: 20
                      }}
                      animate={inView ? { 
                        opacity: 1,
                        x: 0,
                        y: 0
                      } : {}}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`relative ${index % 2 === 0 ? 'ml-auto pl-8 pr-4' : 'mr-auto pr-8 pl-4'} w-[calc(50%-2rem)]`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        {/* Card Header with Slide-up Animation */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 }}
                          className={`inline-block px-4 py-2 rounded-full mb-4 ${exp.color} bg-opacity-10 dark:bg-opacity-20`}
                        >
                          <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            {exp.year}
                          </span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.4 }}
                        >
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">{exp.role}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1 mb-4">
                            <span>📍</span> {exp.location}
                          </p>
                        </motion.div>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.5 }}
                          className="text-gray-600 dark:text-gray-300 mb-4"
                        >
                          {exp.description}
                        </motion.p>
                        
                        {/* Achievements with Stagger Animation */}
                        <motion.div className="mb-4 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{achievement}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        {/* Technologies with Stagger Animation */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
            <div className="max-w-2xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className={`absolute top-0 left-0 w-2 h-full ${edu.color} rounded-l-xl`} />
                  <div className="pl-4">
                    <div className={`inline-block px-4 py-2 rounded-full mb-4 ${edu.color} bg-opacity-10 dark:bg-opacity-20`}>
                      <span className="text-sm font-semibold bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1 mb-4">
                      <span>📍</span> {edu.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 