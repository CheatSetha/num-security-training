import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="navbar  navbar-no-boxShadow mx-auto border-t  bg-white">
      <div className="w-full  mx-auto ">
        <div className="navbar footer bg-white navbar-no-boxShadow w-10/12 mx-auto">
          <div className="navbar-start">
            <Image
              height={40}
              width={150}
              src={"/assets/images/logo/logo-no-background.png"}
              className="navbar-item flex items-center justify-center"
            />
          </div>
          <div className="navbar-center ">
            <div className="navbar-item text-nowrap text-gray-500">
              Copyright © 2024 NUM Security Awareness Training platform | All
              Rights Reserved{" "}
            </div>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};
