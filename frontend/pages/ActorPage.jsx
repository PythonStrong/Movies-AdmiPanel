import ActorModal from '@/components/Actor/ActorModal'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Skeleton from '@/components/Skeleton'
import { api } from '@/components/api/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ActorPage() {
  const [data, setData] = useState([])
  const [show, setShow] = useState(true)
  const [records, setRecords] = useState([])

  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  console.log(data);
  useEffect(() => {
    axios.get(`${api}api/actors`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
      }
    })
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
      <div className='flex items-center gap-24 flex-wrap justify-center md:px-14 px-4'>
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
            className='ActorCard md:w-[320px] px-1 h-[100%] pb-4 py-1 w-[100%] flex flex-col gap-4' key={i}>
            <img src={item.image} className='image rounded-lg h-[350px] md:[250px] w-[100%] object-cover object-center' alt='Image' />
            <h1 className='text-black text-[20px] font-bold'>{item.name}</h1>
            <h1 className='h-[20vh] overflow-y-scroll ScrollModal'>{item.description}</h1>
          </motion.div>
        ))}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
        {show ? <Skeleton /> : ''}
      </div>

     <div className='mt-64'>
     <Footer />
     </div>
    </div>
  )
}
