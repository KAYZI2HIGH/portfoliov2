"use client";

import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";

const NavLinks = ({ mobile }) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div
      className={`flex mt-20 md:mt-0 gap-10 md:gap-5 ${mobile && "flex-col"}`}
    >
      {navLinks.map((link, index) => {
        return (
          <Link
            href={`${pathName !== '/' ? '/' : `#${link.name}`}`}
            key={index}
            className="text-sm font-normal text-black dark:text-white hover:text-blue-700 uppercase cursor-pointer overflow-hidden w-fit"
          >
            {link.name}
            {/* <AnimatePresence>
              <motion.div
                variants={{ hidden: { x: "-120%" }, visible: { x: 0 } }}
                animate={`${pathName !== link.path ? "hidden" : "visible"}`}
                transition={{ duration: 0.4, ease: easeInOut }}
                className="w-[70%] h-[3px] bg-blue-800 rounded-sm"
              ></motion.div>
            </AnimatePresence> */}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
