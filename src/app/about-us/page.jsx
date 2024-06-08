import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <div className="">
      <h1 className="font-bold bg-white pt-40 mb-24 text-secondary text-5xl text-center">
        Who We Are
      </h1>
      <p className="text-primary text-2xl text-center">
        We are a team of IT students from the National University of Management,
        dedicated to enhancing digital safety. For our final project, we have
        built this Security Awareness Training website to help users understand
        and navigate the complexities of Cybersecurity. Joint us in our mission
        to promote a safer online evironment
      </p>
      </div>
      {/* Meet our team section */}
      <div>
      <h1 className="font-bold text-secondary mt-40 mb-24 text-5xl text-center">
        Meet Our Team
      </h1>
      <div className="pb-5">
        <div className="flex flex-wrap justify-center items-center gap-5">
        <Image className='w-56' src={"/assets/images/aboutus/demo.jpg"} alt='course cover' width={100} height={120} />
        <Image className='w-56' src={"/assets/images/aboutus/demo.jpg"} alt='course cover' width={100} height={120} />
        <Image className='w-56' src={"/assets/images/aboutus/demo.jpg"} alt='course cover' width={100} height={120} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
