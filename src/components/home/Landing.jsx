"use client"
import React from "react";
import Featurebox from "./components/Featurebox";
import TopProgram from "./components/TopProgram";
import InfoSecurityTraining from "./components/InfoSecurityTraining";
import PurposAndObjective from "./components/PandO";
import Image from "next/image";
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/store/features/auth/authSlice";

const HomePage = () => {
  const { data: user, isLoading, isSuccess } = useGetMeQuery();
  const data = useSelector((state) => state.auth);
  console.log(data, "this is the data in nvabar");
  console.log(useSelector((state) => state))

  const dispatch = useDispatch();

  isLoading && console.log("loading");
  isSuccess && console.log("get me fetch success");
  isSuccess && console.log(user, "user data");
  isSuccess && dispatch(setCurrentUser(user));
  const programImg1 = "/assets/images/Home/Security-1.png"
  const programImg2 = "/assets/images/Home/Security-2.png"
  const programImg3 = "/assets/images/Home/Security-3.png"
  const prograpCaption1 = "Security Awareness-Essentials"
  const prograpCaption2 = "Fun CyberSecurity Awareness Training"
  const prograpCaption3 = "Phishing 101"
  return (
    <div>
     <div className="bg-secondary w-full">
     <div className="h-[600px] w-10/12 mx-auto  flex justify-evenly flex-wrap ">
      
      <div className="flex  justify-center  flex-col ">
         <h1 className="text-2xl xl:text-4xl  font-bold">
           Protect Your Digital Life with Our
         </h1>
         <h1 className="text-xl xl:text-3xl font-bold">
           Cybersecurity Training{" "}
           <span className="text-[#05a9df]">platform</span>
         </h1>
         <p className="my-5 ">
           Empower yourself with the knowlegde to stay safe online
         </p>
         <button className="btn bg-primary w-fit px-10 text-white">
           Start training now
         </button>
       </div>
       <div className="flex justify-center items-center">
       <Image className="w-full md:w-[440px]"  src={"/assets/images/home.gif"} width={1200} height={1200} alt="team" />
       </div>
     
     </div>
     </div>
      {/* feature box */}
      <div className="-top-24 max-sm:top-0 relative">
        <div className="w-10/12 mx-auto flex flex-wrap justify-center gap-7 ">
          <Featurebox icon={"o"} number={1} title={"Flexible"} />
          <Featurebox icon={"o"} number={2} title={"Reduced Cost"} />
          <Featurebox icon={"o"} number={3} title={"Up-to-date"} />
        </div>
      </div>

      {/* top program */}
      <div className="w-10/12 mx-auto max-sm:mt-7">
        <h1 className="text-3xl  xl:text-4xl font-semibold text-primary">Brows Top Security Awareness </h1>
        <h1 className="text-3xl xl:text-4xl font-semibold text-primary">Program</h1>

        <div className="flex justify-evenly flex-wrap lg:flex-nowrap gap-3 md:gap-7 my-5">
          <TopProgram bgColor={'#E1EFFE'} title={prograpCaption1} url={programImg1}/>
          <TopProgram bgColor={'#edebfe'} title={prograpCaption2} url={programImg2}/>
          <TopProgram bgColor={'#def7ec'} title={prograpCaption3} url={programImg3}/>
          <div className="flex flex-col justify-center items-center w-[300px] p-5 h-[210px] ">
            <div className="h-[110px] w-[110px] bg-primary text-white rounded-full flex justify-center items-center">
              go
            </div>
            <p className="text-center mt-2">Brows All</p>
          </div>
        </div>

      </div>

      {/* security awarenes training */}
      <div className="w-10/12 mx-auto">
        <InfoSecurityTraining />
        <PurposAndObjective />
      </div>
    </div>
  );
};

export default HomePage;
