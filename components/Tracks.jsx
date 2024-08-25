"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ImSoundcloud, ImSpotify } from "react-icons/im";

const data = [

  //NEW RELEASES//
  {
    title: "Don't Act A Fool - Rebellion Rexords",
      subtitle: "New Release",
      icon: <ImSpotify className="text-[#00E052] text-lg mt-0.5 mr-2"/>,
    image: "/assets/images/Don't-Act-A-Fool.png",
    url:"https://open.spotify.com/track/0ttJ1vAS5mZotIphvcKSAu?si=876bc042dc444946",
  },
  {
    title: "Don't Act A Fool - Rebellion Rexords",
      subtitle: "New Release",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Don't-Act-A-Fool.png",
    url:"https://soundcloud.com/user-219120497/damp-dont-act-a-fool-free-dl?in=damp-3670/sets/releases&si=2bfedb9306f44a66a61b976f7bc664a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

  //Lastest RELEASES//
  {
    title: "All Our Releases",
      subtitle: "Playlist",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/All-Releases.png",
    url:"https://soundcloud.com/damp-3670/sets/releases?si=dd42f9668f3043cfba3d9095a9722732&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  
 //PLAYLISTS//
  {
    title: "YOUR FAVORITE BØY BAND",
      subtitle: "Hardtechno Playlist",
      icon: <ImSpotify className="text-[#00E052] text-lg mt-0.5 mr-2"/>,
    image: "/assets/images/Your-Favorite-Boy-Band.png",
    url:"https://open.spotify.com/playlist/0FxXQd866AbRLolEwFKuL9?si=cfc6f60afbaf49d3",
  },

  //Sets//
  {
    title: "Tegendraads Festival-Mix - DAMP",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Tegendraats.png",
    url:"https://soundcloud.com/damp-3670/damp-tegendraads-festival-mix?in=damp-3670/sets/sets&si=e7daee07e79c4f229ba10ef6488a7b07&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "DAMPCAST - VOL.2 - Antwerp",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Dampcast-Vol.2-Antwerp.png",
    url:"https://soundcloud.com/damp-3670/dampcast-pt2-antwerp?in=damp-3670/sets/sets&si=63da4a039ea84484aae2f26dc567f83e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "DAMPCAST - VOL.1 - Kedeng Invites",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Dampcast-Vol.1-Kedeng-Invites.png",
    url:"https://soundcloud.com/damp-3670/dampcast-afl-1-kedeng-invites?in=damp-3670/sets/sets&si=47b05e045b914e0e87bd165a2b4e5d09&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },

];

const Tracks = () => {
  const pathname = usePathname();
  return (

    <div className="mb-4">
      {/* Itereren over de data array */}
      {data.map((track, index) => (
        <div key={index}>

          {/* Link */}
          <div>
            <Link
            href={track.url}
            target="blank"
            className="flex flex-row bg-white/5 p-2 xl:p-3 mt-5 rounded-xl w-[350px] xl:w-[600px] border-solid border-white hover:bg-white/10 xl:hover:-ml-2 xl:hover:w-[605px] duration-150"
            >

              {/* Image */}
              <div className="relative w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]">
                <Image
                  src={track.image}
                  alt={track.title}
                  sizes="full"
                  fill
                  priority
                  quality={100}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Title */}
              <div className="ml-4 leading-normal">
                <p className="xl:font-semibold text-md xl:text-lg">{track.title}</p>
                <div className="flex flex-row">
                  <div className="mt-0.5">
                    {track.icon}
                  </div>
                  <p className="text-white/50 text-md xl:text-lg">{track.subtitle}</p>
                </div>
              </div>

            </Link>

          </div>

        </div>
      ))}
    </div>
  );
};

export default Tracks;
