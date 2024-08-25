"use client";

import Link from "next/link";
import { SlSocialSoundcloud, SlSocialSpotify, SlSocialInstagram } from "react-icons/sl";
import { RiTiktokLine } from "react-icons/ri";

const Socials = () => {
    return (
      <div className="flex flex-row gap-6 mt-8">

        <Link href="https://soundcloud.com/damp-3670" target="_blank">
        <SlSocialSoundcloud className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF7700] duration-100"/>
        </Link>
        
        <Link href="https://open.spotify.com/artist/346ae2WFW1EyXALKIWHQt6?si=VMW6QnAPTv6CBJP4SxkB3w" target="_blank">
        <SlSocialSpotify className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#00E052] duration-100"/>
        </Link>

        <Link href="https://www.instagram.com/__damp__/" target="_blank">
        <SlSocialInstagram className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#D103FF] duration-100"/>
        </Link>

        <Link href="https://www.tiktok.com/@damp3670" target="_blank">
        <RiTiktokLine className="text-3xl hover:-mt-[3px] text-white/50 hover:text-[#FF03A2] duration-100"/>
        </Link>

      </div>
    );
  }
  
  export default Socials;