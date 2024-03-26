"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link
      className={
        active ? "border-b w-1/2 border-black block h-6 box-border mt-4" : ""
      }
      href={path}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
