import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CourseDisplay } from "./components/CourseDisplay";

const Learningconsole = () => {

  return (
    <div className="flex justify-evenly flex-wrap xl:flex-nowrap mt-5 gap-5">
    <div className="w-full">
      <div className="bg-green-700 rounded-[24px] h-[120px] w-full">
        <h5 className="text-white font-bold ms-5 pt-5">Training</h5>
      </div>
     <CourseDisplay />
    </div>
    {/* box 2 quiz*/}
    <div className="w-full">
      <div className="bg-purple-600 rounded-[24px] h-[120px] w-full">
        <h5 className="text-white font-bold ms-5 pt-5">Quiz</h5>
      </div>
      <div className="bg-white rounded-[24px] h-[90px] w-11/12 flex items-center -mt-16 mx-auto p-5">
        <h5 className="text-slate-400 font-bold text-start  ">
          No quiz assigned
        </h5>
      
      </div>
    </div>
    {/* box 3 */}
    <div className="w-full">
      <div className="bg-primary rounded-[24px] h-[120px] w-full">
        <h5 className="text-white font-bold ms-5 pt-5">Awareness Month</h5>
      </div>
      <div className="bg-white rounded-[24px] h-[90px] w-11/12 flex justify-between items-center -mt-16 mx-auto p-5">
        <h5 className="text-slate-400 font-bold text-start  ">1 New Post</h5>
        <Link href="/awarenessmonth">
        <h5 className="text-secondary font-bold text-start  ">See all post</h5>
        </Link>
      
      </div>
    </div>
  </div>
  );
};

export default Learningconsole;
