'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import { useEffect, useRef } from "react";
import { IconArrowUp, IconArrowUpRight, IconBrandYoutubeFilled } from "@tabler/icons-react";
import { SkeletonOne } from './projectSkeleton/SkeletonOne';
import { SkeletonTwo } from './projectSkeleton/SkeletonTwo';
import { SkeletonThree } from './projectSkeleton/SkeletonThree';
import { SkeletonFour } from './projectSkeleton/SkeletonFour';
import MagneticButton from './ui/MagneticButton';

const FeatureCard = ({
    children,
    className
}) => {
    return (
        (<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>)
    );
};

const FeatureTitle = ({
    children
}) => {
    return (
        (<p
            className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>)
    );
};

const FeatureDescription = ({
    children
}) => {
    return (
        (<p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}>
            {children}
        </p>)
    );
};

const Projects = () => {

    const projectData = [
        {
            title: "ReadRacoon",
            description:
                "A web-based Learning Management System that makes online learning easier and helps high school students boost their literacy.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Manu",
            description:
                "An Android app that helps UMK businesses connect with shared factories easily.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: "To-Do List",
            description:
                "A simple web-based to-do list app to keep your tasks organized and easily manageable.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Bot Server",
            description:
                "A web app for tracking bot server data in real-time with a smooth and intuitive interface.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ]

    return (
        <section>
            <div className='container mx-auto'>
                <div className="relative z-20 py-10 lg:py-16 max-w-7xl mx-auto my-20">
                    <div className="px-8">
                        <h4
                            className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                            Featured Works
                        </h4>

                        <p
                            className="text-sm lg:text-base my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                            From design to deployment, crafting seamless solutions with a diverse tech stack.
                        </p>
                    </div>
                    <div className="relative ">
                        <div
                            className="grid grid-cols-1 lg:grid-cols-6 mt-6 md:mt-12 xl:border rounded-md dark:border-neutral-800 h-auto">
                            {projectData.map((feature) => (
                                <FeatureCard key={feature.title} className={feature.className}>
                                    <FeatureTitle>{feature.title}</FeatureTitle>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                    <div className=" h-full w-full">{feature.skeleton}</div>
                                </FeatureCard>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <div className='w-fit'>
                            <MagneticButton text='More Projects' icon={<IconArrowUpRight className='text-contrast' />} iconPosition='right' size='lg' variant='outlined' rounded='full' link={'/projects'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects