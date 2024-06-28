'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'


import React from 'react'

const CourseNavBar = () => {

    const pathname = usePathname()
    // console.log(pathname)
    
  return (
    <>
    <Link href='/user/learningconsole'>
      <div className={`h-full flex justify-center items-center p-2 rounded-2xl ${pathname === '/user/learningconsole' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold text-lg px-2 md:px-8 ${pathname === '/user/learningconsole' ? 'text-secondary' : 'text-primary'}`}>
          My Learning
        </p>
      </div>
    </Link>
    <Link href='/user/learningconsole/achievement'>
      <div className={`flex h-full justify-center items-center p-2 rounded-2xl ${pathname === '/user/learningconsole/achievement' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold px-2 md:px-8 text-lg ${pathname === '/user/learningconsole/achievement' ? 'text-secondary' : 'text-primary'}`}>
          My Achievment
        </p>
      </div>
    </Link>
  </>
  )
}

export default CourseNavBar