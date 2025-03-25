import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { Statistics } from "@/components/sections/statistics";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Statistics />
        <Contact />
      </main>
    </>
  );
}
