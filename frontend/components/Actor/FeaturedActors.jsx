import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import ActorModal from "./ActorModal";
import { Actor } from "@/public";
import axios from "axios";
import { api } from "../api/api";
import Skeleton from "../Skeleton";
import { motion } from "framer-motion";

export default function FeaturedActors() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get(`${api}api/actors`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setData(res.data);
        setShow(false);
      });
  }, []);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="md:px-20 px-2 mb-64">
      <div className="flex items-center justify-between mt-16 mb-10">
        <h1 className="text-3xl text-black font-bold">Featured Actors</h1>
        <div className="text-red-500 flex items-center ">
          <Link href="/ActorPage">See more</Link>
          <h1>
            <FaChevronRight />{" "}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-between flex-wrap md:gap-16 gap-10">
        {data.slice(0, 4).map((item, i) => (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              delay: 3.5,
              ease: "easeInOut",
              duration: 1,
            }}
            viewport={{ amount: 0 }}
            variants={variants}
            className="ActorCard md:w-[320px] sm:w-[300px] px-1 h-[100%] pb-4 py-1 w-[100%] flex flex-col gap-4"
            key={i}
          >
            <img
              src={item.image}
              className="image rounded-lg h-[350px] md:[250px] w-[100%] object-cover object-center"
              alt="Image"
            />
            <h1 className="text-black text-[20px] font-bold">{item.name}</h1>
            <h1 className="h-[20vh] overflow-y-scroll ScrollModal">
              {item.description}
            </h1>
          </motion.div>
        ))}
        {show ? <Skeleton /> : ""}
      </div>
    </div>
  );
}
