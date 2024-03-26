import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return <Link>{children}</Link>;
};

export default CustomLink;
