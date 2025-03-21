'use client';

import { Card } from '@/components/ui/card'
import MagneticButton from '@/components/ui/MagneticButton'
import { IconBrandGolang, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandReactNative, IconBrandTailwind, IconBrandTypescript, IconCode, IconDatabase, IconGlobe } from '@tabler/icons-react'
import { Briefcase, Clock, Download, Globe } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import CIcon from '@coreui/icons-react';
import { cibPostgresql } from '@coreui/icons';

const About = () => {

  const jobs = [
    {
      role: "Frontend Developer (Freelance)",
      company: "Personal Client",
      year: "2025",
    },
    {
      role: "Application Developer (Intern)",
      company: "Kalbe Consumer Health",
      year: "2024 - 2025",
    },
    {
      role: "Content Editor (Part Time)",
      company: "Pentens Indonesia",
      year: "2023 - 2024",
    },
    {
      role: "Mentor Program (Scholarship)",
      company: "BINUS University",
      year: "2023 - 2024",
    },
    {
      role: "Creative and Design (Activist)",
      company: "Himpunan Mahasiswa Teknik Informatika",
      year: "2022 - 2023",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "Next.js",
          icon: <IconBrandNextjs />
        },
        {
          name: "React Native",
          icon: <IconBrandReactNative />
        },
        {
          name: "Tailwind",
          icon: <IconBrandTailwind />
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Go",
          icon: <IconBrandGolang />
        },
        {
          name: "Node.js",
          icon: <IconBrandNodejs />
        },
        {
          name: "TypeScript",
          icon: <IconBrandTypescript />
        },
        {
          name: "Java",
          icon: <IconCode />
        }
      ]
    },
    {
      category: "Database",
      items: [
        {
          name: "PostgreSQL",
          icon: <IconDatabase />
        },
        {
          name: "MySQL",
          icon: <IconBrandMysql />
        }
      ]
    },
  ]

  return (
    <section className='py-12 xl:pt-28'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8 min-h-[85vh] md:min-h-[85vh]'>
          <div>
            <h1 className='w-2/3 md:w-full text-5xl xl:text-[68px] xl:leading-[80px] tracking-[-2px] font-medium'>Hello! I'm Patrick</h1>
            <h2 className='md:max-w-4/5 mt-4 md:mt-0 text-[25px] xl:text-[32px] xl:leading-[56px] tracking-[-1px] font-mono'>A <span className='decoration-underline'>Full-Stack Developer</span> with <span className='font-semibold'>1+ years</span> of work experience. I focus on building reliable, high-quality web and mobile apps that deliver exceptional user experiences.</h2>
            <div className='mt-4 flex items-center gap-x-2'>
              <Globe />
              <span className='desc'>
                Based in Tangerang, Indonesia
              </span>
            </div>
            <div className='flex justify-end mt-8 md:hidden'>
              <a href="/patrick_roberto_halim_cv.pdf" target="_blank" rel="noopener noreferrer">
                <div className="w-fit">
                  <MagneticButton size="lg" text="CV" icon={<Download size={22} />} iconPosition="right" />
                </div>
              </a>
            </div>
          </div>
          {/* Desktop Version (With Blur Background) */}
          <div className="hidden xl:flex relative">
            <Card className="w-[400px] h-[400px] absolute top-4 left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg" />

            <a href="/patrick_roberto_halim_cv.pdf" target="_blank" rel="noopener noreferrer">
              <div className="w-fit absolute z-10 top-[42%] -left-[2rem]">
                <MagneticButton size="md" text="CV" icon={<Download size={22} />} iconPosition="top" />
              </div>
            </a>

            <Card className="w-[400px] h-[400px] overflow-hidden relative">
              <img
                src="/images/foto-home.jpg"
                alt="Image home"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Mobile Version (Without Blur Background) */}
          <div className="flex xl:hidden absolute right-8 top-32">
            <Card className="w-20  h-20   rounded-full overflow-hidden relative border border-white/20 shadow-lg">
              <img
                src="/images/foto-home.jpg"
                alt="Image home"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

        </div>
        <div className='flex flex-col gap-y-10'>
          <p className='font-mono text-[25px]'>
            Currently, I'm studying Computer Science
            (<span className='font-semibold'>Software Engineering</span>) at BINUS University.
            My expertise spans both <span className='decoration-underline'>Frontend</span> and <span className='decoration-underline'>Backend</span> development,
            covering everything from <span className='decoration-underline'>Design</span> to <span className='decoration-underline'>Deployment</span> to build scalable and efficient applications.</p>
          <div className='flex flex-col gap-y-4'>
            <p className='desc'>My Expertise</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="border-t border-gray-300 pt-4">
                  <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
                  <div className="flex flex-col gap-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className='font-mono text-[25px]'>I’m always excited to apply my skills, tackle new challenges, and stay up to date with the latest technologies. Looking forward to opportunities where I can grow and make an impact!</p>
        </div>
        <div className='pt-28 pb-16'>
          <div className='flex items-baseline mb-6'>
            <h2 className="text-[26px] xl:text-[36px] xl:leading-[56px] tracking-[-1px] font-mono">The Journey So Far</h2>
            <div className="flex ml-2 mb-1">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  .
                </motion.span>
              ))}
            </div>
          </div>
          <div className="md:max-w-3/4 mx-auto">
            {jobs.map((job, index) => (
              <div key={index} className="relative flex items-start pb-6">
                <div className="flex flex-col py-4 border-b w-full">
                  <div className='flex justify-between'>
                    <h3 className="text-md md:text-xl max-w-2/3 md:max-w-full">{job.role}</h3>
                    <p className='text-xs md:text-sm border border-primary px-3 py-1 rounded-lg h-fit'>{job.year}</p>
                  </div>
                  <p className="text-neutral-500 font-mono">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About