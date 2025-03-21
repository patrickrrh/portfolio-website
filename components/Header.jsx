'use client';

import { useEffect, useState } from "react"
import FramerMagnetic from "./FramerMagnetic"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { usePathname } from "next/navigation"
import Logo from "./Logo";

const Header = () => {

  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header className={`${header ? 'py-6 bg-white/20 backdrop-blur-xs border border-white/20 rounded-xl' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              dotStyles='absolute left-1/2 top-full mt-2 h-1.5 w-1.5 bg-contrast rounded-full transform -translate-x-1/2'
            />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header