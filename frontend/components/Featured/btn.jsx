import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const BtnComponent = () => {
  const [isLoved, setIsLoved] = useState(false);

  const handleClick = () => {
    setIsLoved(!isLoved);
  };

  return (
    <h1
      className="bg-gray-200 w-[35px] h-[35px] rounded-full absolute top-5 right-5 p-1 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      {isLoved ? (
        <IoMdHeart size={30} style={{ color: "red" }} />
      ) : (
        <CiHeart size={30} />
      )}
    </h1>
  );
};

export default BtnComponent;
