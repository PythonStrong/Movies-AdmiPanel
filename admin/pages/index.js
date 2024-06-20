import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Alert = () => alert("Success Add");

  return (
    <div>
      <Navbar />
      <Sidebar />

     
    </div>
  );
}
