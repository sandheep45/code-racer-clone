"use client";

import Link from "next/link";
import Image from "next/image";
import { cn, isActiveRoute } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/race",
    title: "Race",
  },
  {
    href: "/leaderboard",
    title: "Leaderboard",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center h-full gap-6 lg:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image width={30} height={30} src="/logo.png" alt="logo" />
        <span className="inline-block font-bold font-special">CodeRacer</span>
      </Link>

      <nav className="items-center flex-1 hidden h-full md:flex">
        {navItems?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "md:text-xs lg:text-sm flex h-full items-center p-4 border-b-2 border-b-yellow-500 border-opacity-0 hover:text-yellow-500 border-t-2 border-t-transparent hover:bg-white hover:bg-opacity-5",
                  {
                    "border-b-2 border-b-yellow-500 border-opacity-100 text-yellow-500 decoration-2 decoration-primary":
                      isActiveRoute(pathname, item.href),
                  },
                )}
                data-cy={`${item.title}-main-nav-link`}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </div>
  );
};

export default Nav;
