'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'


import React from 'react'

const AwarenessNavBar = () => {

    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <Link href='/awarenessmonth'>
      <div className={`h-full flex justify-center items-center btn p-2 rounded-2xl ${pathname === '/awarenessmonth' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold text-lg px-2 md:px-8 ${pathname === '/awarenessmonth' ? 'text-secondary' : 'text-primary'}`}>
          Awareness Tips
        </p>
      </div>
    </Link>
    <Link href='/awarenessmonth/poster'>
      <div className={`flex h-full btn justify-center items-center p-2 rounded-2xl ${pathname === '/awarenessmonth/poster' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold px-2 md:px-8 text-lg ${pathname === '/awarenessmonth/poster' ? 'text-secondary' : 'text-primary'}`}>
          Poster and Wallpaper
        </p>
      </div>
    </Link>
  </>
  )
}

export default AwarenessNavBar