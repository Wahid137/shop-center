"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link href={path}>
      <button
        className={
          active ? "border-b border-black block h-6 box-border mt-4" : ""
        }
      >
        {children}
      </button>
    </Link>
  );
};

export default CustomLink;
