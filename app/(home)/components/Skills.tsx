"use client";
import React from 'react';
import { motion } from "framer-motion"; // Assuming framer-motion is available for animations
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';

// --- Inline SVG Icons (Replacements for react-icons) ---
// These SVG components are defined directly to avoid external dependencies.
// They now use 'currentColor' by default, inheriting from the parent's style.
const PythonIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-1.5c-.83 0-1.5-.67-1.5-1.5V12h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V8.5c0-.83.67-1.5 1.5-1.5H11c.55 0 1 .45 1 1s-.45 1-1 1h-1.5v1.5c0 .28.22.5.5.5H11c.55 0 1 .45 1 1s-.45 1-1 1zm7-4h-1.5c-.83 0-1.5-.67-1.5-1.5V12h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V8.5c0-.83.67-1.5 1.5-1.5H18c.55 0 1 .45 1 1s-.45 1-1 1h-1.5v1.5c0 .28.22.5.5.5H18c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
);
const ReactIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 .33 1.82z"/></svg>
);
const JavascriptIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 15.11c-.34.34-.78.53-1.26.53-.48 0-.92-.19-1.26-.53-.34-.34-.53-.78-.53-1.26s.19-.92.53-1.26c.34-.34.78-.53 1.26-.53.48 0 .92.19 1.26.53.34.34.53.78.53 1.26s-.19.92-.53 1.26zm-1.84-5.36c-.34.34-.78.53-1.26.53-.48 0-.92-.19-1.26-.53-.34-.34-.53-.78-.53-1.26s.19-.92.53-1.26c.34-.34.78-.53 1.26-.53.48 0 .92.19 1.26.53.34.34.53.78.53 1.26s-.19.92-.53 1.26z"/></svg>
);
const NextjsIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm.5-12.5h-1v5h-2V9h-1v6h4v-1h-2v-4h1z"/></svg>
);
const MongodbIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const NodejsIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-1.5c-.83 0-1.5-.67-1.5-1.5V12h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V8.5c0-.83.67-1.5 1.5-1.5H11c.55 0 1 .45 1 1s-.45 1-1 1h-1.5v1.5c0 .28.22.5.5.5H11c.55 0 1 .45 1 1s-.45 1-1 1zM18 15h-1.5c-.83 0-1.5-.67-1.5-1.5V12h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V8.5c0-.83.67-1.5 1.5-1.5H18c.55 0 1 .45 1 1s-.45 1-1 1h-1.5v1.5c0 .28.22.5.5.5H18c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
);
const ExpressjsIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const TailwindcssIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const Html5Icon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const Css3Icon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const BootstrapIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);
const MysqlIcon = ({ size = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
);


type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative z-10">
        {text}
      </h2>
      <div className="w-24 h-2 bg-blue-500 rounded-full mt-2 -rotate-6"></div>
      <div className="w-24 h-2 bg-indigo-500 rounded-full mt-1 -rotate-6 blur-sm opacity-50"></div>
    </div>
  );
};

type SkillItem = { text: string; Icon: React.ComponentType<{ size?: number }>; color: string };

const HoverEffect = ({ items }: { items: SkillItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="relative group block p-4 h-full w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="relative z-20 h-full w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl overflow-hidden">
            {/* Moving border lines */}
            <span
              className="absolute top-0 left-0 w-full h-[2px] animate-border-move-h group-hover:opacity-0 transition-opacity duration-300"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
            ></span>
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] animate-border-move-h-reverse group-hover:opacity-0 transition-opacity duration-300"
              style={{ backgroundImage: `linear-gradient(to left, transparent, ${item.color}, transparent)` }}
            ></span>
            <span
              className="absolute left-0 top-0 h-full w-[2px] animate-border-move-v group-hover:opacity-0 transition-opacity duration-300"
              style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${item.color}, transparent)` }}
            ></span>
            <span
              className="absolute right-0 top-0 h-full w-[2px] animate-border-move-v-reverse group-hover:opacity-0 transition-opacity duration-300"
              style={{ backgroundImage: `linear-gradient(to top, transparent, ${item.color}, transparent)` }}
            ></span>

            {/* Full border on hover */}
            <span
              className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: item.color }}
            ></span>

            {/* Card content */}
            <div className="relative z-30 mb-4" style={{ color: item.color }}>
              <item.Icon size={64} /> {/* Icon will inherit color from parent div */}
            </div>
            <p className="relative z-30 text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300" style={{ color: item.color }}>
              {item.text}
            </p>
          </div>
          {/* Subtle hover background effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"
            style={{ background: `linear-gradient(to bottom right, ${item.color}B3, ${item.color}66)` }}
          ></div>
        </motion.div>
      ))}
    </div>
  );
};

// --- Skills Component ---
const Skills = () => {
  const skills = [
    { text: "Python", Icon: SiPython, color: "#3776AB" },
    { text: "React", Icon: SiReact, color: "#61DAFB" },
    { text: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { text: "NextJS", Icon: SiNextdotjs, color: "white" }, // Black for NextJS
    { text: "NodeJS", Icon: SiNodedotjs, color: "#339933" },
    { text: "ExpressJS", Icon: SiExpress, color: "#F7DF1E" }, // Black for ExpressJS
    { text: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { text: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { text: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { text: "CSS", Icon: SiCss3, color: "#1572B6" },
    { text: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { text: "MySQL", Icon: SiMysql, color: "#4479A1" },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-black-50 to-black-100 dark:from-black-900 dark:to-black-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Title text="My Skills" className="mb-16" /> {/* Added margin-bottom */}

        <HoverEffect items={skills} />
      </div>
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes border-move-h {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes border-move-h-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes border-move-v {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes border-move-v-reverse {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        .animate-border-move-h {
          animation: border-move-h 3s linear infinite;
        }
        .animate-border-move-h-reverse {
          animation: border-move-h-reverse 3s linear infinite;
        }
        .animate-border-move-v {
          animation: border-move-v 3s linear infinite;
        }
        .animate-border-move-v-reverse {
          animation: border-move-v-reverse 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
