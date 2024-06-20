import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";

export default function Profile() {
  const [val, setVal] = useState("");
  const GetEmail = localStorage.getItem("MovieUserEmail");
  const GetPhoto = localStorage.getItem("MovieUserPhoto");
  const [name, setName] = useState("Profile");
  const router = useRouter();
  const ClearLocal = () => {
    localStorage.clear();
    router.push("/");
  };
  useEffect(() => {
    if (
      !localStorage.getItem("MovieUserEmail") &&
      !localStorage.getItem("MovieUserPhoto")
    ) {
    }
  }, []);

  const handleSave = () => {
   setName(val)
   localStorage.setItem("MovieUserName", val)
  }

  return (
    <div>
      <Navbar name={name}/>
      <div className="h-[70vh] pt-40 flex flex-col items-center justify-center gap-6">
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={GetPhoto} />
          </div>
        </div>
        <h1
          className="text-2xl font-semibold text-black"
        >
          {name}
        </h1>
        <h1 className="text-1xl font-semibold">{GetEmail}</h1>
        <input
          placeholder="Change Profile Name"
          className="inp md:w-[300px] w-[90%]"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          name="text"
          type="text"
        />
        <button className="btn btn-success text-white"
        onClick={handleSave}
        >Save</button>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={ClearLocal}
        >
          <CiLogout size={30} />
          LogOut
        </div>
      </div>
    </div>
  )
}
