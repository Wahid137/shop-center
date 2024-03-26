import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return <div></div>;
};

export default CustomLink;
