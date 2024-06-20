"use client";
import { Item, Mdb, Spider } from "@/public";
import { FaChevronRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { api } from "../api/api";
import React, { useEffect, useRef, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import Skeleton from "../Skeleton";
import { motion } from "framer-motion";
import BtnComponent from "./btn";

export default function FeaturedMovie() {
  const [data, setData] = useState([]);
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(true);
  const RandomNumber = useState(Math.trunc(Math.random() * 100));

  useEffect(() => {
    axios.get(`${api}api/get-cardMovies`).then((res) => {
      setData(res.data);
      setShow(false);
    });
  }, []);
  console.log(data);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="md:px-20 px-2">
      <div className="flex items-center justify-between mt-16 mb-10">
        <h1 className="text-3xl text-black font-bold">Featured Movie</h1>
        <div className="text-red-500 flex items-center ">
          <Link href="/FeaturedVideoPage">See more</Link>
          <h1>
            <FaChevronRight />{" "}
          </h1>
        </div>
      </div>

      <div className="flex items-center md:justify-between justify-center gap-10 md:px-0 px-4 flex-wrap">
        {data.slice(0, 5).map((item, i) => (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              ease: "easeInOut",
              duration: 0.3,
            }}
            viewport={{ amount: 0 }}
            variants={variants}
            className="relative md:w-[270px] sm:w-[300px] w-[60%]  gap-2 card"
            key={i}
          >
            <Link href={`/FeaturedMovie/${item._id}`}>
              <div className="flex">
                <img
                  src={item.image}
                  alt="Image"
                  className="w-[100%] img rounded-lg"
                />
              </div>
            </Link>
            <BtnComponent />
            <h1>
              {item.country} {item.year} - {item.lang}
            </h1>
            <h1 className="font-bold text-black text-[20px]">{item.name}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={Mdb} alt="Image" />
                <h1 className="text-black">{RandomNumber}/100</h1>
              </div>
              <div className="flex items-center">
                <Image src={Item} alt="Item" />
                <h1 className="text-black">71%</h1>
              </div>
            </div>
            <h1>{item.genre}</h1>
          </motion.div>
        ))}
      </div>
      {show ? <Skeleton /> : ""}
    </div>
  );
}
