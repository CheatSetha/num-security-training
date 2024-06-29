"use client";
import CardCourse from "@/components/course/CardCourse";
import HeaderCourseDetail from "@/components/course/HeaderCourseDetail";
import { useGetCourseQuery } from "@/store/features/course/courseSlice";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  console.log(id, "id in course detail header");
  const { data } = useGetCourseQuery(id);
  console.log(data, "data in course detail page");
  return (
    <div className="bg-secondary pb-3">
      <HeaderCourseDetail courseName={data?.data?.courseName} />
      <div className="w-10/12 mx-auto flex items-center px-5 h-16 rounded-[24px] bg-white shadow -mt-11">
        <progress
          className="progress w-full progress-flat-secondary"
          value="0"
          max="100"
        ></progress>
      </div>

      <div className="w-10/12 mx-auto my-5 flex flex-wrap flex-shrink gap-5">
        {/* objective */}
        <div className="w-full md:w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow">
          <h1 className="text-xl font-semibold text-start">Objective</h1>
          <div className="btn w-full h-10 bg-primary text-white">
            <p className="text-xl text-white">Start</p>
          </div>
        </div>
        {/* pre-assessement */}
        <div className="w-full md:w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow">
          <h1 className="text-xl font-semibold text-start">Pre-Assessment</h1>
          <div className="btn w-full h-10 bg-primary text-white">
            <p className="text-xl text-white">Start</p>
          </div>
        </div>
        {data &&
          data?.data?.sections.map((section) => (
            <CardCourse
              key={section._id}
              title={section?.sectionTitle}
              detail={section?.details}
              courseID={data?.data?._id}
              sectionID={section.sectionUUID}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
