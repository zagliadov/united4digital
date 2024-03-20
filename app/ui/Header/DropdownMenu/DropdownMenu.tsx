"use client";

import { FC, useRef } from "react";
import Link from "next/link";
import * as _ from "lodash";
import { links } from "@/app/lib/links";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/app/lib/hooks/useDimensions";

const dropdownVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const DropdownMenu: FC = () => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="tablet:hidden"
    >
      <motion.div
        className="flex justify-center z-10 w-full absolute top-[86px] left-0 text-black transform origin-top"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
      >
        <ul className="flex flex-col py-4 px-14 border-t-4 border-t-primary rounded-b-md w-3/5 bg-base-100">
          {_.map(links, (link) => {
            return (
              <Link key={link.name} href={link.href}>
                <li className="py-4 text-center leading-4">{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
