"use client";
import { IoIosPlayCircle } from "react-icons/io";
import { Poster } from "@/public";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { api } from "./api/api";
import Link from "next/link";

export default function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${api}api/get-movies`)
    .then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="flex items-start justify-center">
      <Swiper
        autoplay={{
          delay: 3500,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.slice(5, 6).map((item) => (
          <SwiperSlide>
            <div className="flex Hero">
              <img
                src={item.image}
                alt="Hero"
                className="relative object-cover w-[100%] brightness-50"
              />
              <div className="md:w-[500px] md:mt-44 mt-72 md:pl-20 pl-4 w-[90%] flex flex-col md:gap-8 items-start gap-4 absolute">
                <h1 className="md:text-[62px] text-[36px] text-white">
                  {item.name}
                </h1>
                <h1 className="md:text-[15px] text-[12px] font-bold text-white HeroText">
                  {item.description}
                </h1>
                <Link href={item.trailer}>
                  <button className="btn md:w-[180px] bg-red-500 hover:bg-red-500 h-[30px] border-none">
                    <IoIosPlayCircle size={25} />
                    Watch Later
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {data.slice(6, 7).map((item) => (
          <SwiperSlide>
            <div className="flex Hero">
              <img
                src={item.image}
                alt="Hero"
                className="relative object-cover w-[100%] brightness-50"
              />
              <div className="md:w-[500px] md:mt-44 mt-72 md:pl-20 pl-4 w-[90%] flex flex-col md:gap-8 items-start gap-4 absolute">
                <h1 className="md:text-[62px] text-[36px] text-white">
                  {item.name}
                </h1>
                <h1 className="md:text-[15px] text-[12px] font-bold text-white HeroText">
                  {item.description.slice(1, 700)}
                </h1>
                <Link href={item.trailer}>
                  <button className="btn md:w-[180px] bg-red-500 hover:bg-red-500 h-[30px] border-none">
                    <IoIosPlayCircle size={25} />
                    Watch Later
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {data.slice(7, 8).map((item) => (
          <SwiperSlide>
            <div className="flex Hero">
              <img
                src={item.image}
                alt="Hero"
                className="relative object-cover w-[100%] brightness-50"
              />
              <div className="md:w-[500px] md:mt-44 mt-72 md:pl-20 pl-4 w-[90%] flex flex-col md:gap-8 items-start gap-4 absolute">
                <h1 className="md:text-[62px] text-[36px] text-white">
                  {item.name}
                </h1>
                <h1 className="md:text-[15px] text-[12px] font-bold text-white HeroText">
                  {item.description.slice(1, 700)}
                </h1>
                <Link href={item.trailer}>
                  <button className="btn md:w-[180px] bg-red-500 hover:bg-red-500 h-[30px] border-none">
                    <IoIosPlayCircle size={25} />
                    Watch Later
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div className="flex Hero">
            <Image
              src={Poster}
              alt="Hero"
              className="relative object-cover w-[100%] brightness-75"
            />
            <div className="md:w-[500px] md:mt-44 mt-72 md:pl-20 pl-4 w-[90%] flex flex-col md:gap-8 items-start gap-4 absolute">
              <h1 className="md:text-[62px] text-[36px] text-white">
                John Wick 3 : Parabellum
              </h1>
              <h1 className="md:text-[15px] text-[12px] font-bold text-white HeroText">
                John Wick: Chapter 3 – Parabellum is a 2019 American neo-noir
                action thriller film directed by Chad Stahelski from a
                screenplay by Derek Kolstad, Shay Hatten, Chris Collins, and
                Marc Abrams, based on a story by Kolstad. The film is the sequel
                to John Wick: Chapter 2 (2017) and the third installment in the
                John Wick franchise. It stars Keanu Reeves as the title
                character, alongside an ensemble supporting cast In October
                2016, Stahelski stated a third John Wick film was in the works;
                this was formally announced in June 2017,
              </h1>
              <Link
                href={`https://www.youtube.com/embed/qEVUtrk8_B4?si=MSXfXV4cFvJKTECz`}
              >
                <button className="btn md:w-[180px] bg-red-500 hover:bg-red-500 h-[30px] border-none">
                  <IoIosPlayCircle size={25} />
                  Watch Later
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
