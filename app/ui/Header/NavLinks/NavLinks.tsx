"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as _ from "lodash";
import { Button } from "@/app/ui/Button/Button";
import { links } from "@/app/lib/links";

export const NavLinks: FC = () => {
  const pathname = usePathname();

  return (
    <div className="hidden tablet:flex">
      <ul className="navbar-end text-base-100 w-full hidden tablet:flex">
        {_.map(links, (link) => {
          return (
            <Link key={link.name} href={link.href}>
              <li className="mr-4 h-full flex items-center">{link.name}</li>
            </Link>
          );
        })}
      </ul>
      <Button
        label="Contact us"
        className="px-5"
      />
    </div>
  );
};
