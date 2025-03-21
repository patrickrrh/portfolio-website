'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";
import FramerMagnetic from "./FramerMagnetic";

const links = [
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
]

const Nav = ({ containerStyles, linkStyles, dotStyles }) => {

  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <FramerMagnetic key={index}>
          <Link href={link.path} className={`relative capitalize ${linkStyles}`}>
            {link.path === path && (
              <motion.span 
                layoutId="dot"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className={`${dotStyles}`}
              />
            )}
            {link.name}
          </Link>
        </FramerMagnetic>
      ))}
    </nav>
  );
};

export default Nav