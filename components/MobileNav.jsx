"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";


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

const MobileNav = () => {
    const pathname = usePathname();
    return (
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuKebab className="text-[32px] text-white rotate-90"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <nav className="mt-32 mr-4 flex flex-col gap-8 justify-center items-end text-white/50">
                {links.map((link, index) => (
                    <Link href={link.path} key={index} className={`
                    ${link.path === pathname && "text-white border-b-2 border-white"}
                    capitalize font-bold hover:text-white transition-all`}>
                    {link.name}
                    </Link>
                ))}
                <Link href="/">
                    <Button className="mt-2">Book us</Button>
                </Link>
            </nav>
        </SheetContent>
      </Sheet>
    );
  }
  
  export default MobileNav;