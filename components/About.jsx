'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { IconArrowUpRight } from '@tabler/icons-react';

const About = () => {

    const { scrollY } = useScroll();

    const yMove = useTransform(scrollY, [0, 650], [200, 30]); 

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                    <div className="w-full md:w-7/10">
                        <h2 className="h2">
                            Focused on crafting intuitive interfaces and building cutting-edge applications across platforms.
                        </h2>
                    </div>
                    <div className="w-full md:w-3/10 flex flex-col justify-between space-y-6">
                        <p className="desc">
                            Passionate about turning ideas into interactive experiences that are both visually appealing and highly functional.
                        </p>

                        <motion.div 
                            style={{ y: yMove }} 
                            className='w-fit self-end md:self-auto'
                        >
                            <MagneticButton 
                                text='About Me' 
                                shape='circular' 
                                icon={<IconArrowUpRight />} 
                                iconPosition='right' 
                                size='lg' 
                                rounded='full' 
                                link={'/about'} 
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
