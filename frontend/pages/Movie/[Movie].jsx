import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { api } from "@/components/api/api";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LikeComponent from "@/components/LikeComponent";

export default function MoviePage() {
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    axios.get(`${api}api/getId-cardCartoons/${params.Movie}`).then((res) => {
      setData(res.data.project);  
    });
  }, [params]);
  return (
    <div>
      <Navbar />

      <div>
        <iframe src={data?.video} className="h-[100vh] w-[100%]" />

        {/* for info   */}
        <div className="mt-6 flex flex-col gap-10 items-start pl-10">
          <h1 className="text-3xl text-black font-bold">{data?.name}</h1>
          <h1>
           <span className="font-bold text-black"> Kino Yil Sana va Tili:</span> 
            {data?.country} {data?.year} - {data?.lang}
          </h1>
          <h1><span className="font-bold text-black">Kino Janri:</span> {data?.genre}</h1>
          <h1 className="md:w-[40%] w-[90%]"><span className="font-bold text-black">Kino Haqida:</span> {data?.description}</h1>
          <Link href={`${data?.trailer}`}>
            <button
              className="btn btn-outline glass hover:text-white"
              style={{ border: "1px solid gray" }}
            >
              Trailerni Korish
            </button>
          </Link>
          <LikeComponent />
        </div >
      </div>
      <Footer />
    </div>
  );
}
