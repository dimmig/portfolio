import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { Statistics } from "@/components/sections/statistics";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navigation />
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Dmytro Halahan",
                    url: "https://dimmig.me",
                    sameAs: [
                        "https://www.linkedin.com/in/dmytro-halahan",
                        "https://github.com/dimmig",
                    ],
                    image: "https://dimmig.me/favicon.ico",
                    jobTitle: "Software Developer",
                }),
            }}
        />
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
