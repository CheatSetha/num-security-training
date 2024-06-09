import CardCourse from "@/components/course/CardCourse";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-secondary h-screen">
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
            Security Awareness - Essentials
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex items-center px-5 h-16 rounded-[24px] bg-white shadow -mt-11">
        <progress
          className="progress w-full progress-flat-secondary"
          value="20"
          max="100"
        ></progress>
      </div>

      {/* display course card here */}
      <div className="w-10/12 mx-auto my-5 flex flex-wrap flex-shrink gap-5">
        {/* objective */}
        <div className="w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow">
          <h1 className="text-xl font-semibold text-start">Objective</h1>
          <div className="btn w-full h-10 bg-primary text-white">
            <p className="text-xl text-white">Start</p>
          </div>
        </div>
        {/* pre-assessement */}
        <div className="w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow">
          <h1 className="text-xl font-semibold text-start">Pre-Assessment</h1>
          <div className="btn w-full h-10 bg-primary text-white">
            <p className="text-xl text-white">Start</p>
          </div>
        </div>
        <CardCourse />
      </div>
    </div>
  );
};

export default Page;
