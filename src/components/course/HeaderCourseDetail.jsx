"use client"
import { useGetMeQuery } from '@/store/features/auth/authApiSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import MyModal from '../ModalCustome';

const HeaderCourseDetail = ({courseName}) => {
    const { id } = useParams();
    // console.log(id, "id in course detail header")
    const [showModal, setShowModal] = useState(false);
    const { data: user, isLoading, isSuccess } = useGetMeQuery();
    const enrolledCourses = user?.data?.enrolledCourses?._id;
   
  
useEffect(()=>{
    const isEnrolled = user?.data?.enrolledCourses?.find((course) => course._id === id) ? true : false;
    
    setShowModal(!isEnrolled)
},[user, id])


  return (
    <div className="bg-primary h-44">
        <div className="flex w-10/12 mx-auto  gap-5 items-center h-full">
          <Link href="/user/learningconsole">
            <Image
              className="w-6  "
              src={"/assets/images/userconsole/arrow-icons-white.svg"}
              width={12}
              height={12}
            />
          </Link>
          <p className="font-semibold text-white text-xl">
            {courseName}
          </p>
        </div>
        {showModal && <MyModal  cuuid={id} uuuid={user?.data?._id}/>}
      </div>
  )
}

export default HeaderCourseDetail