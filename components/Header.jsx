import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
      <header className="py-8 xl:py-12 text-white/50">
        <div className="container mx-auto flex justify-center items-center">

            {/*pc nav*/}
            <div className="hidden xl:flex items-center gap-8 ">
                <Nav />
                <Link href="/">
                    <Button>Book us</Button>
                </Link>
            </div>

            {/*gsm nav*/}
            <div className="xl:hidden">
                <MobileNav />
                <Link href="/">
                </Link>
            </div>

        </div>
      </header>
    );
  }
  
  export default Header;