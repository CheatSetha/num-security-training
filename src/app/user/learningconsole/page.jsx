import Image from "next/image";
import Link from "next/link";
import React from "react";

const Learningconsole = () => {
  const cId = "1";
  return (
    <div className="flex justify-evenly flex-wrap xl:flex-nowrap mt-5 gap-5">
    <div className="w-full">
      <div className="bg-green-700 rounded-[24px] h-[120px] w-full">
        <h5 className="text-white font-bold ms-5 pt-5">Training</h5>
      </div>
      <div className="bg-white rounded-[24px] h-[120px] w-11/12 -mt-16 mx-auto p-5">
        <Link href={`/user/course/${cId}`}>
        <h5 className="text-primary font-bold text-start  ">
          Security awareness - Essentials
        </h5>
        </Link>
        <div className="flex items-center  mt-3 gap-4">
          <progress
            className="progress progress-flat-success w-full "
            value="50"
            max="100"
          ></progress>{" "}
           <Link href={`/user/course/${cId}`}>
          <Image
            className="w-6 "
            src={"/assets/images/userconsole/icon-training.svg"}
            width={12}
            height={12}
          />
          </Link>
        </div>
        <p className="text-secondary text-end text-sm mt-2">
          50% completed
        </p>
      </div>
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
        {/* <div className="flex items-center  mt-3 gap-4">
          <progress
            className="progress progress-flat-success w-full "
            value="50"
            max="100"
          ></progress>{" "}
          <Image
            className="w-6 "
            src={"/assets/images/userconsole/icon-training.svg"}
            width={12}
            height={12}
          />
        </div>
        <p className="text-secondary text-end text-sm mt-2">
          50% completed
        </p> */}
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
