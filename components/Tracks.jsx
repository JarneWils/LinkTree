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
    url:"https://open.spotify.com/track/0ttJ1vAS5mZotIphvcKSAu?si=5330b2b6c4644dce",
  },
  {
    title: "Don't Act A Fool - Rebellion Rexords",
      subtitle: "New Release",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Don't-Act-A-Fool.png",
    url:"https://open.spotify.com/track/0ttJ1vAS5mZotIphvcKSAu?si=5330b2b6c4644dce",
  },

  //Lastest RELEASES//
  {
    title: "All Our Releases",
      subtitle: "Playlist",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/All-Releases.png",
    url:"https://soundcloud.com/damp-3670/sets/releases",
  },
  
 //PLAYLISTS//
  {
    title: "YOUR FAVORITE BØY BAND",
      subtitle: "Hardtechno Playlist",
      icon: <ImSpotify className="text-[#00E052] text-lg mt-0.5 mr-2"/>,
    image: "/assets/images/Your-Favorite-Boy-Band.png",
    url:"https://soundcloud.com/damp-3670/sets/releases",
  },

  //Sets//
  {
    title: "Tegendraads Festival-Mix - DAMP",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Tegendraats.png",
    url:"https://soundcloud.com/damp-3670/damp-tegendraads-festival-mix?in=damp-3670/sets/sets&si=541fc4e75fca44cdabefc3fd7f49be2b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "DAMPCAST - VOL.2 - Antwerp",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Dampcast-vol.2-Antwerp.png",
    url:"https://soundcloud.com/damp-3670/damp-tegendraads-festival-mix?in=damp-3670/sets/sets&si=541fc4e75fca44cdabefc3fd7f49be2b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "DAMPCAST - VOL.1 - Kedeng Invites",
      subtitle: "Set",
      icon: <ImSoundcloud className="text-[#FF7700] text-xl xl:text-2xl mr-2 mt-0.5 xl:mt-0"/>,
    image: "/assets/images/Dampcast-vol.1-Kedeng-Invites.png",
    url:"https://soundcloud.com/damp-3670/damp-tegendraads-festival-mix?in=damp-3670/sets/sets&si=541fc4e75fca44cdabefc3fd7f49be2b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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
            className="flex flex-row border-[2px] border-white/15 bg-white/5 p-2 xl:p-3 mt-5 rounded-xl w-[350px] xl:w-[600px] border-solid border-white hover:bg-white/10 xl:hover:-ml-2 xl:hover:w-[605px] duration-150"
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
