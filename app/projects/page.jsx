"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { IconArrowUpRight } from "@tabler/icons-react";
import FramerMagnetic from "@/components/FramerMagnetic";

const Projects = () => {

  const projects = [
    {
      title: "ReadRacoon",
      company: "BINUS",
      year: "2023",
      description: "A Learning Management System that simplifies online learning and enhances high school students literacy.",
      tags: ["Laravel", "MySQL", "Fullstack"],
      image: "/images/project-readracoon.png",
      link: "https://github.com/patrickrrh/ReadRacoon.git"
    },
    {
      title: "To-Do List",
      company: "Case Study",
      year: "2025",
      description: "A simple tool to keep your tasks organized and easily manageable.",
      tags: ["Next.js", "Tailwind", "Go", "Fullstack"],
      image: "/images/project-todolist.png",
      link: "https://github.com/patrickrrh/todo-list-fe.git"
    },
    {
      title: "Bot Server",
      company: "Freelance",
      year: "2025",
      description: "A smooth and intuitive way to track bot server data in real time.",
      tags: ["Next.js", "Tailwind", "Frontend"],
      image: "/images/project-botserver.png",
      link: "https://github.com/patrickrrh/bot-server.git"
    },
    {
      title: "Manu",
      company: "BINUS",
      year: "2024",
      description: "An Android app that bridges UMK businesses with shared factories seamlessly.",
      tags: ["Android Studio", "Java", "Firebase", "SQLite", "Fullstack"],
      image: "/images/project-manu.png",
      link: "https://github.com/patrickrrh/Manu.git"
    },
    {
      title: "SoldCarId",
      company: "BINUS",
      year: "2022",
      description: "Makes buying and selling pre-owned cars easier and more convenient.",
      tags: ["ASP.NET", "C#", "SQL Server", "Fullstack"],
      image: "/images/project-soldcarid.png",
      link: "https://github.com/patrickrrh/SoldCarId.git"
    },
    {
      title: "Adex Legends",
      company: "BINUS",
      year: "2021",
      description: "Inspired by Apex Legends, this website provides easy access to game information.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Frontend"],
      image: "/images/project-adexlegends.png",
      link: "https://github.com/patrickrrh/Adex-Legends.git"
    }
  ];

  return (
    <section className='min-h-screen py-12 xl:py-16 xl:pb-28'>
      <div className='container mx-auto'>
        <h2 className="text-4xl xl:text-[42px] xl:leading-[56px] tracking-[-1px] font-mono mb-2">What I Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-t border-gray-300 pt-4">
              {/* Title & Metadata */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-neutral-500 text-sm">{project.company} • {project.year}</p>
              </div>

              {/* Description */}
              <p className="text-neutral-500 text-sm mb-4 md:max-w-2/3">{project.description}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:flex-1">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="border border-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-full sm:w-auto flex justify-end sm:justify-normal">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FramerMagnetic>
                      <button className="flex items-center gap-1 text-sm border-b border-current cursor-pointer">
                        View Project <IconArrowUpRight size={18} className="text-contrast" />
                      </button>
                    </FramerMagnetic>
                  </a>
                </div>

              </div>

              {/* Image */}
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects