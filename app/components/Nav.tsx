"use client";

import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Virtualisation",
      link: "/virtualisation",
    },
    {
      name: "Pagination",
      link: "/pagination",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2">
        <Globe size={30} />
        <h1 className="text-4xl font-semibold">ACME</h1>
      </span>

      {/* Mobile */}
      {!isOpen && <Menu size={30} className="visible md:hidden" onClick={() => setIsOpen(true)} />}

      {isOpen && (
        <div className="visible md:hidden absolute inset-0 bg-black/25">
          <div className="min-w-72 max-w-96 w-1/2 h-screen bg-background absolute right-0 top-0 px-6 pt-4">
            <X
              size={30}
              className="ml-auto mb-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <div className="text-right text-4xl space-y-5 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className={`${
                    pathname === link.link
                      ? "bg-foreground text-background"
                      : "hover:bg-foreground/25"
                  } rounded-md px-2`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* desktop */}

      <div className="visible max-md:hidden text-2xl space-x-4">
        {links.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className={`${
                    pathname === link.link
                      ? "border-white"
                      : "hover:bg-foreground/25"
                  } px-2 border-b border-transparent`}
                >
                  {link.name}
                </Link>
              ))}
      </div>
    </div>
  );
};

export default Nav;
