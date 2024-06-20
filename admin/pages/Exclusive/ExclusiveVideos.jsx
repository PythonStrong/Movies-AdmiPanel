import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";

export default function ExclusiveVideos() {
  const [value, setValue] = useState({
    image: "",
    name: "",
    description: "",
    video: "",
  });

  const handlePost = () => {
      axios.post(`${api}api/exclusive/new`, {
          name: `${value.name}`,
          description: `${value.description}`,
          video: `${value.video}`,
        })
        .then((res) => {
          setValue({
            name: "",
            description: "",
            video: "",
          });
          alert("Succes Add");
        });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center md:flex-row flex-col">
        <Sidebar />

        <div className="flex items-center justify-center flex-col gap-10 w-[100%] md:px-0 px-2 card_parent">
          <h1 className="text-3xl text-black font-bold ">Exclusive Videos</h1>
          <input
            type="text"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            placeholder="Movie Name"
            className="input input-bordered w-full max-w-xl"
          />
          <input
            type="text"
            value={value.description}
            onChange={(e) =>
              setValue({ ...value, description: e.target.value })
            }
            placeholder="Video Url"
            className="input input-bordered w-full max-w-xl"
          />
          <input
            type="text"
            value={value.video}
            onChange={(e) => setValue({ ...value, video: e.target.value })}
            placeholder="Description"
            className="input input-bordered w-full max-w-xl"
          />
          <button className="btn btn-success text-white" onClick={handlePost}>Submit</button>
        </div>
      </div>
    </div>
  );
}
