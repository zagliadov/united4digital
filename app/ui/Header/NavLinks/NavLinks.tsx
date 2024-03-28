"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import * as _ from "lodash";
import { Button } from "@/app/ui/Button/Button";
import { links } from "@/app/lib/links";

export const NavLinks: FC = () => {
  const router = useRouter();
  const arrow = (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7055 11L14.1753 8.53026C14.4682 8.23736 14.4682 7.76248 14.1753 7.46958L11.7055 4.99984M13.9556 7.99992L2.95532 7.99992"
        stroke="white"
        stroke-width="1.1"
        stroke-linecap="round"
      />
    </svg>
  );
  return (
    <div className="hidden laptop:flex">
      <ul className="navbar-end text-base-100 w-full hidden laptop:flex">
        {_.map(links, (link) => {
          return (
            <Link key={link.name} href={`/#${link.href}`}>
              <li className="mr-4 h-full flex items-center">{link.name}</li>
            </Link>
          );
        })}
      </ul>
      <Button label="Contact us" className="px-5" icon={arrow} />
    </div>
  );
};
