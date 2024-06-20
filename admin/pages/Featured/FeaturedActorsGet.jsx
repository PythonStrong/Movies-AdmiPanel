import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import Link from "next/link";

export default function FeaturedActorsGet() {
  const [data, setData] = useState([]);
  const [record, setRecords] = useState([]);

  useEffect(() => {
    axios.get(`${api}api/get-cardMovies`)
    .then((res) => {
      setData(res.data);
      setRecords(res.data);
    });
  }, []);

  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };
  function handleDelete(id) {
    const confirm = window.confirm("Are you sure you want to delete this");
      if (confirm) {
        axios.post(`${api}api/cardMovies/delete-data/${id}`)
          .then((res) => {
            alert("Movie Deleted");
            window.location.reload()
          })
          .catch(err => {
            console.log('Error', err);
          })
      }
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center md:flex-row  flex-col">
        <Sidebar />

        <div className="flex md:ml-96 flex-col gap-10 w-[100%] md:px-0 px-2 card_parent md:pt-10 ">
          <label className="input border-black bg-transparent w-[400px] flex items-center gap-2 text-black">
            <input
              type="text"
              className="grow"
              placeholder="What do you want watch?"
              onChange={Filter}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div>
            {record.length == 0 && (
              <h2 className="text-black text-4xl font-bold">No Movie</h2>
            )}{
              record.length > 0 &&(
                <h2 className="text-black text-4xl font-bold">Movie: {data.length}</h2>
              )}
          </div>
          {record.map((item, index) => (
            <div className="flex items-center gap-4 parent" key={index}>
              <img className="w-[120px]" src={item.image} alt="image" />
              <h1>{item.name}</h1>
              <div className="flex items-center gap-2">
                <button className="btn btn-info text-white">Preview</button>
                <button
                  className="btn btn-error text-white"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              <Link href='/Edit'><button className="btn btn-success text-white">Edit</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
