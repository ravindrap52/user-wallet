import Link from "next/link";

type NavLink = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link
      className="px-10 py-3  text-white bg-[#ed4e33] rounded-md"
      href={href}
      prefetch={false}
    >
      {children}
    </Link>
  );
};
