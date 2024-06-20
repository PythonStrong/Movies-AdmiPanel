import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
   <div>
    <Navbar />

     <div className='flex items-center flex-col justify-center h-[70vh] pt-28 font-mono select-none'>
      <h1 className='font-bold text-2xl text-black'>Your Search Page: FileName Not Found</h1>
      <h1 className='font-bold text-[200px] text-black'>404</h1>
      <Link href={'/'}><button className="bottom">Home</button></Link>
    </div>

    <Footer />
   </div>
  )
}
