"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { easeInOut } from "motion";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { Backdrop } from "@mui/material";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [menu, setMenu] = useState(false)

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
    else setDarkMode(false)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  })

  return (
    <motion.nav
      variants={{ hidden: { y: "-200%" }, visible: { y: 0 } }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.33, ease: easeInOut }}
      className="flex justify-between items-center p-4 shadow-lg  bg-[#EFEFF1] dark:bg-[#0A0A0C] rounded-xl sticky top-10 z-50 min-w-[70%] md:min-w-[300px] w-fit mx-auto gap-4"
    >
      <div className="size-10 relative">
        <Link href={'/'}>
        
        <Image
          src={"/logo.svg"}
          alt="LOGO"
          fill
        />
        </Link>
      </div>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <div className="flex justify-center items-center gap-1">
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className={`${
            darkMode ? "text-white" : "text-black"
          } size-10 flex justify-center items-center cursor-pointer`}
        >
          {darkMode ? <Sun size={25} /> : <Moon size={25} />}
        </div>
        <div
          className={`md:hidden relative z-50 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X size={25} /> : <Menu size={25} />}
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <Backdrop
            open={menu}
            onClick={() => setMenu(!menu)}
            className="z-10 w-screen min-h-svh"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-1/2 h-full absolute top-0 right-0 bottom-0 md:hidden bg-white dark:bg-[#1F2937] dark:text-white py-20 px-10"
            >
              {
                <NavLinks
                  mobile={true}
                  setMenu={setMenu}
                />
              }
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;