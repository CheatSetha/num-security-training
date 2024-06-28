'use client'
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./CourseCard";


export const CourseDisplay = () => {
    const {data,isLoading , isSuccess } = useGetMeQuery()
    const enrolledCourses = data?.data?.enrolledCourses;
    console.log(enrolledCourses, "enrolled courses")
    

  return (
    <div >
      {/* check if data = 0 display empty card */}
      {enrolledCourses?.length === 0 && (
        <div className="bg-white rounded-[24px] h-[90px] w-11/12 flex items-center -mt-16 mx-auto p-5">
        <h5 className="text-slate-400 font-bold text-start  ">
          No Course
        </h5>
      
      </div>
      )}
      {/* if data is not empty display course card */}
      <div className="flex flex-col gap-20 ">
      {enrolledCourses?.map((course) => (
        <CourseCard key={course._id} title={course.courseName} cId={course._id} />
      ))}
      </div>

    </div>
  );
};
