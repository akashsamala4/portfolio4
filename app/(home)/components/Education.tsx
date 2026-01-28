"use client";

import React from 'react';
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
  FaBookOpen
} from 'react-icons/fa';

// Title Component
type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight z-10">
      {text}
    </h2>
    <div className="origin-left h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3 shadow-md" />
  </div>
);

// Card Component
interface EducationEntryProps {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
  isCurrent?: boolean;
}

const EducationCard = ({
  degree,
  major,
  institution,
  location,
  period,
  gpa,
  details,
  isCurrent,
}: EducationEntryProps) => (
  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-7 rounded-2xl border border-gray-700 shadow-xl overflow-hidden group transition-all duration-300">
    {isCurrent && (
      <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg tracking-wide">
        CURRENT
      </span>
    )}
    <div className="flex items-start gap-4 mb-4">
      <FaGraduationCap className="text-blue-400 text-4xl group-hover:text-purple-400 transition-colors duration-300" />
      <div>
        <h3 className="text-2xl font-extrabold text-white leading-tight group-hover:text-blue-300">
          {degree}
        </h3>
        <p className="text-lg text-blue-300 font-medium">{major}</p>
      </div>
    </div>
    <div className="text-gray-300 space-y-2 text-base">
      <div className="flex items-center">
        <FaUniversity className="mr-2 text-purple-400" /> {institution}, {location}
      </div>
      <div className="flex items-center">
        <FaCalendarAlt className="mr-2 text-purple-400" /> {period}
      </div>
      {gpa && (
        <div className="flex items-center">
          <FaAward className="mr-2 text-purple-400" /> GPA: {gpa}
        </div>
      )}
    </div>
    {details && details.length > 0 && (
      <div className="mt-5 pt-4 border-t border-gray-700/50">
        <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
          <FaBookOpen className="mr-2 text-blue-400" /> Key Highlights:
        </h4>
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    <div
      className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background: 'radial-gradient(circle at top right, rgba(124, 58, 237, 0.08), transparent 70%)',
      }}
    />
  </div>
);

// Main Section
const EducationSection = () => {
  const educationData: EducationEntryProps[] = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      institution: "Parul Institute of Technology",
      location: "Vadodara, India",
      period: "July 2022 - May 2026",
      gpa: "8.5/10 (Expected)",
      details: [
        "Specialization in Web Development and Machine Learning.",
        "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Web Technologies, Artificial Intelligence.",
        "Actively participated in competitive programming and hackathons.",
        "Developed a full-stack e-commerce platform as a final year project."
      ],
      isCurrent: true,
    },
    {
      degree: "Higher Secondary Education",
      major: "Science (PCM)",
      institution: "Sri Sai Sidhartha Junior College",
      location: "Ananthapur, India",
      period: "April 2020 - March 2022",
      gpa: "90.3%",
      details: [
        "Focused on Physics, Chemistry, and Mathematics.",
        "Participated in inter-school science fairs and robotics clubs.",
        "Awarded 'Student of the Year' for academic excellence and extracurricular involvement."
      ],
    },
    {
      degree: "Secondary School Education",
      major: "All Subjects",
      institution: "Narayana School",
      location: "Tadipatri, India",
      period: "April 2019 - March 2020",
      gpa: "100%",
      details: [
        "Completed 10th grade with distinction.",
        "Active member of the debate club and school newspaper.",
        "Developed foundational interest in problem-solving and technology."
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-black-950 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <Title text="My Educational Journey" className="mb-20" />

        <div className="relative border-l-4 border-gray-700 pl-8 md:pl-12 space-y-14">
          {educationData.map((entry, index) => (
            <div key={index} className="relative">
              {/* <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs">
                <FaBookOpen className="text-sm" />
              </div> */}
              <EducationCard {...entry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
