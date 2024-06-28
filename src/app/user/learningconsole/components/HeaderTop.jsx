'use client'
import { useGetMeQuery } from '@/store/features/auth/authApiSlice'
import Image from 'next/image'
import React from 'react'

const HeaderTop = () => {
    const {data} = useGetMeQuery()
  return (
    <div className="bg-primary h-44">
        <div className="w-10/12 mx-auto flex justify-between items-center h-full">
          {/* profile and name section in the left side */}
          <div className="flex gap-4 justify-center items-center">
            <Image
              className="w-16 rounded-full avatar-ring"
              src={"/assets/images/userconsole/pf.jpg"}
              width={1200}
              height={1200}
            />
            <h1 className="text-white text-2xl font-semibold">{data?.data?.name}</h1>
          </div>

          
        </div>
      </div>
  )
}

export default HeaderTop