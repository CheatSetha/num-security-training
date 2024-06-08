import Image from "next/image";
import React from "react";

const Learningconsole = () => {
  return (
    <div className="bg-secondary h-screen">
      <div className="bg-primary h-44">
        <div className="w-10/12 mx-auto flex justify-between items-center h-full">
          {/* profile and name section in the left side */}
          <div className="flex gap-4 justify-center items-center">
            <Image
              className="w-16 rounded-full avatar-ring"
              src={"/assets/images/userconsole/pf.jpg"}
              width={12}
              height={12}
            />
            <h1 className="text-white text-2xl font-semibold">Setha Cheat</h1>
          </div>

          {/* list of neccessary items */}
          <div className="flex gap-4">
            <div className="rounded-[20px] bg-white bg-opacity-15  h-12 w-28 text-white flex justify-center items-center">
              <p className="font-semibold text-xl">
                1 <span className="text-lg font-light">TODO</span>
              </p>
            </div>
            <div className="rounded-[20px] bg-white bg-opacity-15  h-12 w-28 text-white flex justify-center items-center">
              <p className="font-semibold text-xl">
                1 <span className="text-lg font-light">TODO</span>
              </p>
            </div>
            <div className="rounded-[20px] bg-white bg-opacity-15  h-12 w-28 text-white flex justify-center items-center">
              <p className="font-semibold text-xl">
                1 <span className="text-lg font-light">TODO</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        {/* nav bar for user console */}
        <div className="-mt-[32px]">
          <div className="flex gap-8  bg-white shadow rounded-[24px] h-16 p-2">
            <div className="bg-primary bg-opacity-10 flex justify-center items-center p-2 rounded-2xl">
              <p className="text-secondary font-semibold text-lg">
                My Learning
              </p>
            </div>
            <div className="bg-white flex justify-center items-center">
              <p className="text-primary font-semibold text-lg">
                My Achievment
              </p>
            </div>
            <div className="bg-white  flex justify-center items-center">
              <p className="text-primary font-semibold text-lg">More Courses</p>
            </div>
          </div>
        </div>

        {/* box of 3 section */}
        <div className="flex justify-evenly flex-wrap xl:flex-nowrap mt-5 gap-5">
          <div className="w-full">
            <div className="bg-green-700 rounded-[24px] h-[120px] w-full">
              <h5 className="text-white font-bold ms-5 pt-5">Training</h5>
            </div>
            <div className="bg-white rounded-[24px] h-[120px] w-11/12 -mt-16 mx-auto p-5">
              <h5 className="text-primary font-bold text-start  ">
                Security awareness - Essentials
              </h5>
              <div className="flex items-center  mt-3 gap-4">
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
            <div className="bg-white rounded-[24px] h-[90px] w-11/12 flex items-center -mt-16 mx-auto p-5">
              <h5 className="text-slate-400 font-bold text-start  ">No post</h5>
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
        </div>
      </div>
    </div>
  );
};

export default Learningconsole;
