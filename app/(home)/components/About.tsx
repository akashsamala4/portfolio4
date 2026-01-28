"use client";
import Image from "next/image";
import { ArrowRight, TelegramLogo } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function About() {
  const { t, i18n } = useTranslation("common");
  const [currentLang, setCurrentLang] = useState<"en" | "ta">("en");

  useEffect(() => {
    setCurrentLang(i18n.language as "en" | "ta");
  }, [i18n.language]);

  return (
    <section className="w-full py-20 bg-black text-white overflow-hidden animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-700">
          {/* Glowing animation background */}
          <div className="absolute inset-0 z-0 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-indigo-500 animate-glow" />

          {/* Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 z-10">
            <Image
              src="/Professional_edited.jpg"
              alt="chandrika's Professional Image"
              fill
              className="rounded-full border-4 border-blue-500 shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow animate-bounce-slow">
              {currentLang === "ta" ? "நான்!" : "Me!"}
            </span>
          </div>

          {/* Text */}
          <div className="z-10 text-center md:text-left max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold animate-slide-in-top">
              {currentLang === "ta"
                ? "என்னைப் பற்றி சிறிது!!"
                : "Little About Me!!"}
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <ArrowRight size={60} weight="bold" className="text-blue-500 mt-1" />
                <span>
                  {currentLang === "ta"
                    ? "வேலம்மாள் பொறியியல்கல்லூரியில் பட்டம் பெற்ற..."
                    : "A proud graduate of Parul Institute of Engineering and Technology, where I earned my Bachelor's degree in Computer science Engineering and laid a strong foundation in tech."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={60} weight="bold" className="text-blue-500 mt-1" />
                <span>
                  {currentLang === "ta"
                    ? "இப்போது, ​​நான் நிஜ உலக தொழில்நுட்ப..."
                    : "Now, I'm a working professional diving deeper into the real-world tech landscape, continuing to grow as an avid developer, passionate volunteer, and confident public speaker. I'm always up for exploring innovative ideas and new opportunities to make an impact"}
                </span>
              </li>
            </ul>

            {/* Resume Button */}
            <div className="pt-4 animate-slide-in-bottom">
              <a
                href="https://drive.google.com/file/d/1w9CZzVblkG6DvG_pn1oYtJjGRUjQG1Xa/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
              >
                {currentLang === "ta" ? "சுயவிவரம் பார்க்க" : "View Resume"}
                <TelegramLogo size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes glow {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(1deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out both;
        }
        .animate-slide-in-top {
          animation: slideInTop 1s ease-out both;
        }
        .animate-slide-in-bottom {
          animation: slideInBottom 1s ease-out 0.3s both;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite ease-in-out;
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
