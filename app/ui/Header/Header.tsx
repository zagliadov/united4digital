import Logo from "@/app/ui/Header/Logo/Logo";
import { NavLinks } from "@/app/ui/Header/NavLinks/NavLinks";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";

export default function Header() {
  return (
    <header className="bg-primary h-86 flex items-center">
      <nav className="navbar justify-between px-10 tablet:px-0 items-center container mx-auto text-white">
        <Logo />
        <NavLinks />
        <DropdownMenu />
      </nav>
    </header>
  );
}
