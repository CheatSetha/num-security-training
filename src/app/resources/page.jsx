import CourseSampleCard from "@/components/CourseSampleCard";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-10/12 mx-auto bg-white pt-2 ">
      <div className="flex gap-8  bg-white shadow rounded-[24px] h-16 p-2">
        <div className="bg-primary bg-opacity-10 flex justify-center items-center p-2 rounded-2xl">
          <p className="text-secondary px-3 font-semibold ">My Learning</p>
        </div>
        <div className="bg-white flex justify-center items-center">
          <p className="text-primary font-semibold ">My Achievment</p>
        </div>
        <div className="bg-white  flex justify-center items-center">
          <p className="text-primary font-semibold">More Courses</p>
        </div>
      </div>

      {/* section 2 side bar menu and search box */}
      <div className="flex flex-wrap lg:flex-nowrap mt-5 gap-5">
        {/* search box */}
        <div className="flex w-full flex-col items-center lg:w-[460px] mx-auto">
          <div className="relative w-full p-2 bg-white shadow-sm rounded-2xl flex ">
            <input
              type="text"
              id="simple-search"
              className="bg-[#ebf9fd]  text-secondary text-sm rounded-lg  block w-full ps-3 p-2.5  "
              placeholder="Search course..."
              required
            />
            <Image
              className="w-5 -ml-8"
              src={"/assets/images/userconsole/icon-training.svg"}
              width={12}
              height={12}
            />
          </div>

          <div className="w-full mt-5">
            <h1 className="text-3xl font-semibold text-secondary text-start ">
              Category
            </h1>
            <ul className="mt-3">
              <li className="text-primary border  py-3 mb-2 rounded-xl border-gray-100 px-2 text-lg">
                Security Awareness
              </li>
              <li className="text-primary border  py-3 mb-2 rounded-xl border-gray-100 px-2 text-lg">
                Tips and Best Practice
              </li>
            </ul>
          </div>
        </div>

        {/* data display here */}
        <div className="w-full mb-3 flex  flex-wrap flex-shrink gap-3">
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
          <CourseSampleCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
