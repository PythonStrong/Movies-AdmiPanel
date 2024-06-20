import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import React, { useState } from "react";
import { api } from "../api/api";

export default function FeaturedActors() {
  // const Alert = () => alert('Success Add')
  const [value, setValue] = useState({
    image: "",
    name: "",
    description: "",
  });

  const HandlePost = () => {
    axios.post(`${api}api/actor/new`, {
        image: `${value.image}`,
        name: `${value.name}`,
        description: `${value.description}`,
      })
      .then((res) => {
        setValue({
          image: "",
          name: "",
          description: "",
        });
        alert("Success Add");
      });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center md:flex-row flex-col">
        <Sidebar />

        <div className="flex items-center justify-center flex-col gap-10 w-[100%] md:px-0 px-2 card_parent">
          <h1 className="text-3xl text-black font-bold ">Featured Actors</h1>
          <input
            onChange={e => setValue({ ...value, image: e.target.value })}
            value={value.image}
            type="text"
            placeholder="Image Url"
            className="input input-bordered w-full max-w-xl"
          />
          <input
            onChange={e => setValue({ ...value, name: e.target.value })}
            value={value.name}
            type="text"
            placeholder="Movie Name"
            className="input input-bordered w-full max-w-xl"
          />
          <input
            onChange={e => setValue({ ...value, description: e.target.value })
            }
            value={value.description}
            type="text"
            placeholder="Movie Description"
            className="input input-bordered w-full max-w-xl"
          />
          <button className="btn btn-success text-white" onClick={HandlePost}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
