import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='md:h-[100%] md:fixed md:mb-0 mb-20 md:w-[30vh] w-[100%] text-white flex md:flex-col flex-wrap bg-[#140028] md:py-0 py-4 md:pt-32 gap-10 pl-4 md:top-0'>
        <Link href='/Hero/HeroVideo' className='md:text-2xl'>Post Hero</Link>
        <Link href='/Hero/HeroVideoGet' className='md:text-2xl'>Get Hero Video</Link>
        <Link href='/FeaturedM/FeaturedMovie' className='md:text-2xl'>Post Featured Movie</Link>
        <Link href='/FeaturedM/FeaturedMovieGet' className='md:text-2xl'>Get Featured Movie</Link>
        <Link href='/NewArial/NewArrival' className='md:text-2xl'>Post New Arrival</Link>
        <Link href='/NewArial/NewArrivalGet' className='md:text-2xl'>Get New Arrival</Link>
        <Link href='/Exclusive/ExclusiveVideos' className='md:text-2xl'>Post Exclusive Videos</Link>
        <Link href='/Exclusive/ExclusiveVideoGet' className='md:text-2xl'>Get Exclusive Videos</Link>
        <Link href='/Featured/FeaturedActors' className='md:text-2xl'>Post Featured Actors</Link>
        <Link href='/Featured/FeaturedActorsGet' className='md:text-2xl'>Get Featured Actors</Link>
    </div>
  )
}
