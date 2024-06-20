import FeaturedActors from "@/components/Actor/FeaturedActors";
import NewArrival from "@/components/Arrial/NewArrival";
import ExclusiveVideo from "@/components/Exclusive/ExclusiveVideo";
import FeaturedMovie from "@/components/Featured/FeaturedMovie";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Loading, setLoader] = useState(true)
  setInterval(() => {
    setLoader(false)
  }, 1000);
  return (
    <>
      {Loading ? <Loader /> :
        <div>
          <Navbar />
          <Hero />
          <FeaturedMovie />
          <NewArrival />
          <ExclusiveVideo />
          <FeaturedActors />
          <Footer />
        </div>}
    </>
  );
}
