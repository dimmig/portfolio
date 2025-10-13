"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

export function Hero() {
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-blue-500 rounded-full opacity-50";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = Math.random() * 100 + "vh";
      particle.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
      document.querySelector(".particles-container")?.appendChild(particle);
    };

    for (let i = 0; i < 50; i++) {
      createParticle();
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Particles Container */}
      <div className="particles-container absolute inset-0" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 dark:opacity-50 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 dark:opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 dark:opacity-50 animate-blob animation-delay-4000" />
      </motion.div>

      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'dark' ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-100 sm:text-gray-700" />
        )}
      </motion.button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white sm:text-gray-900 sm:dark:text-white mb-4 transform-gpu leading-tight">
            Dmytro Halahan
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 sm:text-gray-600 sm:dark:text-gray-100 mb-6 sm:mb-8">
            Software Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 sm:text-gray-600 sm:dark:text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Crafting elegant solutions to complex problems through clean, efficient code
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center font-medium"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-500 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center font-medium"
            >
              <span className="relative z-10 text-white sm:text-gray-900 sm:dark:text-white font-semibold">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>        
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
} 