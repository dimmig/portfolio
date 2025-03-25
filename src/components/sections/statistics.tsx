"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statistics = {
  codeStats: [
    { label: "Lines of Code", value: "100K+", color: "from-blue-500 to-cyan-500" },
    { label: "Projects Completed", value: "50+", color: "from-purple-500 to-pink-500" },
    { label: "GitHub Contributions", value: "1000+", color: "from-green-500 to-emerald-500" },
    { label: "Code Reviews", value: "200+", color: "from-orange-500 to-red-500" },
  ],
  skillLevels: [
    { skill: "Frontend Development", level: 95 },
    { skill: "Backend Development", level: 90 },
    { skill: "DevOps & Cloud", level: 85 },
    { skill: "Database Design", level: 88 },
    { skill: "System Architecture", level: 85 },
  ],
  yearlyProgress: [
    { year: 2021, projects: 15, contributions: 450 },
    { year: 2022, projects: 22, contributions: 680 },
    { year: 2023, projects: 28, contributions: 920 },
    { year: 2024, projects: 30, contributions: 1000 },
  ],
};

export function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="statistics" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Development Statistics
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Code Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.codeStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Expertise Levels
          </h3>
          <div className="space-y-6">
            {statistics.skillLevels.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">{skill.skill}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Yearly Progress Graph */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Yearly Progress
          </h3>
          <div className="relative h-80">
            <div className="absolute inset-0 grid grid-cols-4 gap-4">
              {statistics.yearlyProgress.map((data, index) => (
                <motion.div
                  key={data.year}
                  className="relative flex flex-col justify-end h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-center mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {data.year}
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${(data.contributions / 1000) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${(data.projects / 30) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg absolute bottom-0 left-0 opacity-50"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Contributions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full opacity-50" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 