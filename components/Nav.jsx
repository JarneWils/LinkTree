"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Linktree",
        path: "/",
    },
    {
        name: "Free download",
        path: "/download",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link href={link.path} key={index} className={`
                ${link.path === pathname && "text-white border-b-2 border-white"}
                capitalize font-bold hover:text-white transition-all`}>
                {link.name}
                </Link>
            ))}
        </nav>
    );
};
  
  export default Nav;