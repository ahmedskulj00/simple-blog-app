"use client";

import { HEADER_NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="h-11">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-full text-xl">
        <h1>Simple Blog App</h1>
        <div className="flex gap-6">
          {HEADER_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`hover:border-b border-white ${
                  isActive ? "border-b" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
