'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FramerMagnetic({ children, maxPull = 8 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        
        let x = (clientX - (left + width / 2)) * 2;
        let y = (clientY - (top + height / 2)) * 2;

        x = Math.max(-maxPull, Math.min(x, maxPull));
        y = Math.max(-maxPull, Math.min(y, maxPull));

        setPosition({ x, y });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 120, damping: 4.5, mass: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
