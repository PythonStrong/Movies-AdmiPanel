import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="md:mt-20 px-2 mt-10">
      <div className="flex md:items-center md:justify-center md:gap-12 gap-5 text-black md:flex-row flex-col">
        <Link
          href={"https://www.facebook.com/"}
          data-tip="Facebook"
          className="lg:tooltip text-[#1877F2]"
        >
          <FaFacebookSquare size={40} style={{ cursor: "pointer" }} />{" "}
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          data-tip="Instagram"
          className="lg:tooltip text-[#c13584]"
        >
          <FaInstagram size={40} style={{ cursor: "pointer" }} />{" "}
        </Link>
        <Link
          href={"https://twitter.com/"}
          data-tip="Twitter"
          className="lg:tooltip text-[#1DA1F2]"
        >
          <FaTwitter size={40} style={{ cursor: "pointer" }} />{" "}
        </Link>
        <Link
          href={"https://www.youtube.com/"}
          data-tip="You Tube"
          className="lg:tooltip text-[#FF0000]"
        >
          <FaYoutube size={40} style={{ cursor: "pointer" }} />{" "}
        </Link>
      </div>

      <div className="flex md:items-center md:justify-center md:gap-12 gap-5 text-black font-bold mt-8 md:flex-row flex-col">
        <Link href="/">Conditions of Use</Link>
        <Link href="/">Privacy & Policy</Link>
        <Link href="/">Press Room</Link>
      </div>

      <div className="flex items-center justify-center gap-12 font-bold mt-8 cursor-not-allowed">
        <h1>© 2021 MovieBox by Adriana Eka Prayudha </h1>
      </div>
    </div>
  );
}
