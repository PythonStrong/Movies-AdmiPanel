import Navbar from "@/components/Navbar";
import { auth, provide } from "@/config";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login(props) {
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState("");
  const router = useRouter()

  const HandleSubmit = () => {
    signInWithPopup(auth, provide).then((data) => {
      setVal(data.user.email);
      setVal1(data.user.photoURL);
      localStorage.setItem('MovieUserEmail', data.user.email);
      localStorage.setItem('MovieUserPhoto', data.user.photoURL)
      router.push('/')
    });
  };
  return (
    <div className="Sign">
      <Navbar val1={val1} val={val} />
      <div className="h-[96vh] flex items-center justify-center">
        <div className="SignSibling">
          <div className="flex items-center flex-col justify-center h-[80%] rounded-xl w-[450px] gap-10 SignChild">
            <div className="flex items-center gap-10 flex-col md:w-[370px]">
            <input
              type="text"
              className="input w-[100%]"
              placeholder="First Name"
            />
            <input
              type="text"
              className="input w-[100%]"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="input w-[100%]"
              placeholder="Username"
            />
            <input type="text" className="input w-[100%]" placeholder="Email" />
            <input
              type="text"
              className="input w-[100%]"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center w-[370px]">
            <button
              className="btn w-[100%] bg-[#EA4335] hover:bg-[#EA4335] border-0 text-xl"
              onClick={HandleSubmit}
            >
              {" "}
              <FaGoogle size={27} />
              Google
            </button>
          </div>
          <button className="btn btn-success text-white">Submit</button>

          <Link href="/Sign" className="font-bold text-xl">
            Not Account ?
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
