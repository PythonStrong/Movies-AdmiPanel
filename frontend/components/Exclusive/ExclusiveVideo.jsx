import { Thumbnails } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import { api } from "../api/api";
import Skeleton from "../Skeleton";
import { MdOutlinePlayCircle } from "react-icons/md";

export default function ExclusiveVideo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios.get(`${api}api/exclusive/get`)
    .then((res) => {
      setData(res.data);
      setShow(false);
    });
  }, []);
  return (
    <div className="md:px-20 px-2 mt-20 mb-20">
      <div className="flex items-center justify-between mt-16 mb-10">
        <h1 className="text-3xl text-black font-bold ">Exclusive Videos</h1>
        <div className="text-red-500 flex items-center ">
          <Link href="/ExclusiveVideoPage">See more</Link>
          <h1>
            <FaChevronRight />{" "}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-between flex-wrap gap-16">
        {show ? <Skeleton /> : ""}
        {show ? <Skeleton /> : ""}
        {data.slice(1, 7).map((item) => (
          <div className="md:w-[450px] w-[300px] video">
            <iframe
              src={item.description}
              className="w-[500px] h-[300px] rounded-lg"
              alt="Image"
            />
            <h1 className="text-[20px] text-black font-bold mt-3">
             {item.name}
            </h1>
            <h1 className="font-bold mt-3">
             {item.video}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
