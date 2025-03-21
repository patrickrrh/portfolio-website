'use client';

import Link from "next/link"
import { Download, Globe, Send } from "lucide-react"

import { GoArrowDownRight } from "react-icons/go";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconCode, IconGlobe, IconLocation, IconMail, IconPin, IconPinFilled } from "@tabler/icons-react";
import { Button } from "./ui/button";
import MagneticButton from "./ui/MagneticButton";
import { Card } from "./ui/card";
import Badge from "./Badge";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {

    const sosmed = [
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/patrickrrh",
        },
        {
            title: "Email",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://mail.google.com/mail",
        },
        {
            title: "Whatsapp",
            icon: (
                <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://wa.link/gxgzgr",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "www.linkedin.com/in/patrick-roberto-halim",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/patrickrrh/",
        },
    ]

    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 300], [0, 60]);
    const y2 = useTransform(scrollY, [0, 300], [0, 90]);

    return (
        <section className="py-12 xl:py-24 xl:pt-28 min-h-[90vh] md:min-h-[94vh]">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex flex-col justify-between mx-auto space-y-6 text-center items-center xl:items-start xl:mx-0 xl:text-left">
                        <div className="flex items-center gap-3">
                            <figure className="img-box w-9 h-9 rounded-lg">
                                <img
                                    src="/images/foto-open-to-work.jpg"
                                    alt="patrick portrait"
                                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                    className="rounded-lg"
                                />
                            </figure>
                            <div className="flex items-center gap-1.5 text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                                </span>
                                Available for Work
                            </div>
                        </div>
                        <TextGenerateEffect className='uppercase' words={"Building Innovative Apps as Fullstack Developer"} />
                        <div className="self-start">
                            <FloatingDock items={sosmed} />
                        </div>
                        <div className="w-full flex justify-end md:hidden">
                            <a href="/patrick_roberto_halim_cv.pdf" target="_blank" rel="noopener noreferrer">
                                <div className="w-fit">
                                    <MagneticButton size="lg" text="CV" icon={<Download size={22} />} iconPosition="right" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* image */}
                    <div className="hidden xl:flex relative">
                        <Card className="w-[400px] h-[400] absolute top-4 left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg" />

                        <motion.div style={{ y: y1 }} className="absolute z-10 top-[14%] -left-[6rem]">
                            <Badge icon={<IconCode />} badgeText={"Fullstack Developer"} />
                        </motion.div>
                        <motion.div style={{ y: y2 }} className="absolute z-10 top-[40%] left-[20rem]">
                            <Badge icon={<Globe />} badgeText={"Tangerang, Indonesia"} />
                        </motion.div>
                        <a href="/patrick_roberto_halim_cv.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="w-fit absolute z-10 top-[70%] -left-[2rem]">
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

                </div>
            </div>
        </section>
    )
}

export default Hero