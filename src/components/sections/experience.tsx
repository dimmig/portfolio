"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    year: "2024 - Present",
    title: "AirTrail",
    company: "Tech Company",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    year: "2022 - 2023",
    title: "Full Stack Developer",
    company: "NexaFlow",
    description: "Developed and maintained multiple full-stack applications. Implemented CI/CD pipelines and automated testing.",
    technologies: ["Next.js", "Python", "Django", "PostgreSQL"],
  },
  {
    year: "2022 - 2022",
    title: "APYS Trainee",
    company: "Digital Agency",
    description: "Created responsive and interactive web applications. Collaborated with designers to implement pixel-perfect designs.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "GraphQL"],
  },
];

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Computer Science",
    institution: "University Of Silesia, Katowice",
    description: "Graduated with honors. Focused on software engineering and web development.",
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {edu.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 