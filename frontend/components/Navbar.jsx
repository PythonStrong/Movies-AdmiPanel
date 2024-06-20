import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered, FaEquals } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (window.location.pathname.includes("/FeaturedVideoPage")) {
      setHide(false);
    } else if (window.location.pathname.includes("/ActorPage")) {
      setHide(false);
    } else if (window.location.pathname.includes("/ArialVideoPage")) {
      setHide(false);
    }
  }, []);

  const TrueNav = () => setNav(true);
  const FalseNav = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 17) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const email = localStorage.getItem("MovieUserEmail");
  const photo = localStorage.getItem("MovieUserPhoto"); 
  const nick = localStorage.getItem("MovieUserName"); 
  return (
    <div>
      <div
        className={`md:flex items-center justify-between  lg:px-20 md:px-10 h-[10vh] hidden fixed z-50 w-[100%] ${
          scroll ? "bg-[#190028e4] duration-500" : "bg-[#00000093]"
        }`}
      >
        <Link href="/" className="flex items-center gap-8 ">
          <div className="avatar cursor-pointer">
            <div className="w-14 rounded-full">
              <img
                src="https://media.istockphoto.com/id/869426418/vector/icon-television-with-antenna-in-retro-style.jpg?s=612x612&w=0&k=20&c=TRUZrauq4Wn1NPyJ2mLGy0gv1yo4GDkPFwkrAudd3mQ="
                alt="Image"
              />
            </div>
          </div>
          <h1 className="text-[22px] cursor-pointer">MovieBox</h1>
        </Link>
        {hide && (
          <label className="input border-white bg-transparent w-[400px] flex items-center gap-2 text-white">
            <input
              type="text"
              className="grow"
              placeholder="What do you want watch?"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        )}

        <div className="flex items-center gap-4">
          {photo ? (
            <img
              src={photo}
              href={"/Profile"}
              className="w-[55px] rounded-full h-[55px] cursor-pointer"
            />
          ) : (
            ""
          )}
          {email ? (
            <Link
              href={"/Profile"}
              className="text-[18px] font-bold cursor-pointer"
            >
             {nick ? `${nick}`  :'Profile'}
            </Link>
          ) : (
            <Link
              href={"/Sign"}
              className="text-[18px] font-bold cursor-pointer"
            >
              Sign up
            </Link>
          )}
          <button
            className="btn btn-circle bg-red-500 hover:bg-red-500 "
            onClick={TrueNav}
          >
            <FaEquals size={20} />
          </button>
        </div>
      </div>
      <div
        className={`flex md:hidden fixed z-50 w-[100%] py-2 items-center justify-between px-4  ${
          scroll ? "bg-[#140028C0] duration-500" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-8">
          <div className="avatar cursor-pointer">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://media.istockphoto.com/id/869426418/vector/icon-television-with-antenna-in-retro-style.jpg?s=612x612&w=0&k=20&c=TRUZrauq4Wn1NPyJ2mLGy0gv1yo4GDkPFwkrAudd3mQ="
                alt="Image"
              />
            </div>
          </div>
          <h1 className="text-[22px] cursor-pointer">MovieBox</h1>
        </Link>
        <h1 className="cursor-pointer">
          {" "}
          <FaBarsStaggered size={30} onClick={TrueNav} />
        </h1>
      </div>

      {nav ? (
        <div className="fixed text-6xl z-[999] flex items-center flex-col gap-20 justify-center w-[100%] h-[100vh] bg-[#140028FF]">
          <h1
            className="absolute top-6 right-4 md:right-20 cursor-pointer"
            onClick={FalseNav}
          >
            <IoCloseSharp size={40} />
          </h1>
          <Link href={"/"} className="text-4xl">
            Home
          </Link>
          <Link href={"/"} className="text-4xl">
            About
          </Link>
          <Link href={"/Sign"} className="text-4xl">
            Sign in
          </Link>
          <Link href={"/Login"} className="text-4xl">
            Contact
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
