"use client";


// Components
import Foto from "@/components/Foto";
import Socials from "@/components/Socials";
import Tracks from "@/components/Tracks";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center">

            {/*logo*/}
            <div className="-ml-[100px] xl:-ml-[120px]">
              <Foto />
            </div>

            {/*naam*/}
            <div className="mt-[110px] xl:mt-[130px] -ml-1 justify-center items-center text-xl xl:text-4xl gothic">
              D A M P
            </div>

            {/*Socials*/}
            <div>
              <Socials />
            </div>

            {/*Tracks*/}
            <div className="mt-5">
              <Tracks />
            </div>

            <div>
              <BackToTop />
            </div>


          </div>
        </div>
    </section> 
  );
}
