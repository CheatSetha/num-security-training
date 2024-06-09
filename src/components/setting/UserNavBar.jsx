'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'


import React from 'react'

const UserNavBar = () => {

    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <Link href='/user/setting'>
      <div className={`h-full flex justify-center items-center p-2 rounded-2xl ${pathname === '/user/setting' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold text-lg px-2 md:px-8 ${pathname === '/user/setting' ? 'text-secondary' : 'text-primary'}`}>
          My Profile
        </p>
      </div>
    </Link>
    <Link href='/user/setting/change-password'>
      <div className={`flex h-full justify-center items-center p-2 rounded-2xl ${pathname === '/user/setting/change-password' ? 'bg-primary bg-opacity-10' : 'bg-white'}`}>
        <p className={`font-semibold px-2 md:px-8 text-lg ${pathname === '/user/setting/change-password' ? 'text-secondary' : 'text-primary'}`}>
          Change Password
        </p>
      </div>
    </Link>
  </>
  )
}

export default UserNavBar