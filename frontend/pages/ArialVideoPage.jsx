import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Skeleton from '@/components/Skeleton'
import { api } from '@/components/api/api'
import { Item, Mdb } from '@/public'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoMdHeart } from 'react-icons/io'
import { motion } from 'framer-motion'
import BtnComponent from '@/components/Featured/btn'

export default function ArialVideoPage() {
  const [data, setData] = useState([])
  const [show, setShow] = useState(true)
  const [like, setLike] = useState(false)
  const [records, setRecords] = useState([])

  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  useEffect(() => {
    axios.get(`${api}api/get-cardCartoons`)
      .then((res) => {
        setData(res.data)
        setShow(false)
        setRecords(res.data)
      })
  }, [])
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <div>
      <Navbar />
      <div className='pt-28 flex items-center justify-center gap-2 flex-col'>
    <div className=' flex items-center justify-center pb-10'>
        <label className="input border-l-black border-r-black bg-transparent w-[400px] flex items-center gap-2 text-black">
          <input type="text" className="grow" placeholder="What do you want watch?" onChange={Filter}/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
      </div>
      <div>
          {records.length == 0 && (
              <h2 className="text-lack text-4xl font-bold">No Movie</h2>
            )}
          </div>
    </div>
      <div className='flex items-center gap-32 flex-wrap justify-center md:px-14 px-4'>
        {records.map((item, i) => (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              delay: i * 0.4,
              ease: 'easeInOut',
              duration: 0.5
            }}
            variants={variants}
            className='relative md:w-[290px] w-[60%]  gap-2 card' key={i}>
            <Link href={`/Movie/${item._id}`}>
              <div className='flex'>
                <img src={item.image} alt="Image" className='w-[100%] img rounded-lg' />
              </div>
            </Link>
            <BtnComponent />
            <h1>{item.country}  {item.year} -     {item.lang}</h1>
            <h1 className='font-bold text-black text-[20px]'>{item.name}</h1>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Image src={Mdb} alt='Image' />
                <h1 className='text-black'>86/100</h1>
              </div>
              <div className='flex items-center'>
                <Image src={Item} alt='Item' />
                <h1 className='text-black'>71%</h1>
              </div>
            </div>
            <h1>{item.genre}</h1>
          </motion.div>
        ))}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
      </div>
      <Footer />
    </div>
  )
}
