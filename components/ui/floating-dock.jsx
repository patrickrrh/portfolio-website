'use client';

import { cn } from "@/lib/utils";
import { IconArrowRight, IconLayoutNavbarCollapse, IconMessage, IconMessage2 } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({ items, className }) => {
    return (
        <div className={cn("relative block md:hidden", className)}>
            <div className="left-full bottom-0 flex flex-row gap-2">
                {items.map((item) => (
                    <div key={item.title}>
                        <Link
                            href={item.href}
                            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                        >
                            <div className="h-4 w-4">{item.icon}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};



const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "hidden md:flex h-16 gap-4 items-end rounded-2xl bg-transparent dark:bg-neutral-900 pb-3",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({ mouseX, title, icon, href }) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20]);

    let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-lg dark:bg-neutral-800 flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 2 }}
                            className="absolute -top-4 inset-x-0 flex justify-center">
                            <div className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 text-sm">
                                {title}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}