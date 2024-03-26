import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/svg/menu.svg"
            className="lg:hidden"
            width={5}
            height={5}
            alt="logo"
          />
          <Link href="/">
            <Image
              src="/assets/lws-logo-black.svg"
              width={20}
              height={10}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="./assets/svg/avatar.svg"
          className="hidden lg:block"
          width={18}
          height={18}
          alt="login acount avatar"
        />
        <Image
          src="/assets/svg/shopping-Cart.svg"
          className="block"
          width={5}
          height={5}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Header;
