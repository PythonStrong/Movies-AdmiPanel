import React, { useState } from "react";
import { api } from "../api/api";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useParams } from "next/navigation";

export default function Edit() {
  const [value, setValue] = useState({
    image: "",
    name: "",
    description: "",
    type: "",
    year: "",
    genre: "",
    country: "",
    lang: "",
    countinuous: "",
    age: "",
    video: "",
    trailer: "",
  });
  const {id} = useParams();

  useEffect(() => {
    axios.get(`${api}/api/getId-cardMovies/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setValue({
          image: res.data.data[0].image,
          name: res.data.data[0].name,
          description: res.data.data[0].description,
          type: res.data.data[0].type,
          year: res.data.data[0].year,
          genre: res.data.data[0].genre,
          country: res.data.data[0].country,
          lang: res.data.data[0].lang,
          countinuous: res.data.data[0].countinuous,
          age: res.data.data[0].age,
          video: res.data.data[0].video,
          trailer: res.data.data[0].trailer,
        });
      });
  }, [api]);

  const UpdId = id
  const handleUpdate = (id) => {
    axios.post(
        `${api}/api/update-data/${UpdId}`,
        {
          image: value.image,
          name: value.name,
          description: value.description,
          type: value.type,
          year: value.year,
          genre: value.genre,
          country: value.country,
          lang: value.lang,
          countinuous: value.countinuous,
          age: value.age,
          video: value.video,
          trailer: value.trailer,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        navigate("/admin/Featured-get");
      });
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex items-center md:flex-row flex-col">
          <Sidebar />

          <div className="flex items-center justify-center flex-col gap-10 w-[100%] md:px-0 px-2 card_parent">
            <h1 className="text-3xl text-black font-bold ">Edit</h1>
            <input
              onChange={(e) => setValue({ ...value, image: e.target.value })}
              value={value.image}
              type="text"
              placeholder="Image Url"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
              value={value.description}
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, type: e.target.value })}
              value={value.type}
              type="text"
              placeholder="Type"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, year: e.target.value })}
              value={value.year}
              type="text"
              placeholder="Movie Year"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, genre: e.target.value })}
              value={value.genre}
              type="text"
              placeholder="Movie genre"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, country: e.target.value })}
              value={value.country}
              type="text"
              placeholder="Movie country"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, lang: e.target.value })}
              value={value.lang}
              type="text"
              placeholder="Movie lang"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) =>
                setValue({ ...value, countinuous: e.target.value })
              }
              value={value.countinuous}
              type="text"
              placeholder="Movie countinuous"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, age: e.target.value })}
              value={value.age}
              type="text"
              placeholder="Movie age"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, video: e.target.value })}
              value={value.video}
              type="text"
              placeholder="video"
              className="input input-bordered w-full max-w-xl"
            />
            <input
              onChange={(e) => setValue({ ...value, trailer: e.target.value })}
              value={value.trailer}
              type="text"
              placeholder="trailer"
              className="input input-bordered w-full max-w-xl"
            />
            <button className="btn btn-success text-white" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
