import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="py-5">
    <h1 className="font-bold text-3xl mb-8 text-primary text-center">
      Profile Management
    </h1>
    <div className="flex items-center justify-center gap-10">
      <Image
        className="w-96 rounded-xl"
        src={"/assets/images/userconsole/pf.jpg"}
        width={1200}
        height={1200}
        
      />
      <div className="w-full lg:w-[400px] ">
          {/* form to change email, f9irst name and last name */}
          <form>
              <div className="mb-5">
                  <label>Email</label>
                  <input
                  type="email"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                  />
              </div>
              <div className="mb-5">
                  <label>First Name</label>
                  <input
                  type="text"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                  />
              </div>
              <div className="mb-7">
                  <label>Last Name</label>
                  <input
                  type="text"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                  />
              </div>
              <div>
                  <button className="bg-primary text-white btn rounded-lg h-12 w-full">
                  Save Change
                  </button>
              </div>
          </form>
              
      </div>
    </div>
  </div>
  );
};

export default Page;
