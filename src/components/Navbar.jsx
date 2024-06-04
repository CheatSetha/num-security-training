import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
   <div className="navbar p-0 navbar-no-boxShadow mx-auto bg-white">
     <div className="w-full  mx-auto shadow-sm">
      <div className="navbar bg-white navbar-no-boxShadow w-10/12 mx-auto">
        <div className="navbar-start">
          <Image
            height={40}
            width={150}
            src={"/assets/images/logo/logo-no-background.png"}
            className="navbar-item flex items-center justify-center"
          />
        </div>
        <div className="navbar-center gap-5 max-md:hidden">
          <div className="navbar-item text-nowrap">Home</div>
          <div className="navbar-item text-nowrap">Resources</div>
          <div className="navbar-item text-nowrap">Contact Us</div>
          <div className="navbar-item text-nowrap">About Us</div>
        </div>
        <div className="navbar-end max-md:hidden">
          <a className="navbar-item">Sign In</a>
          <a className="navbar-item btn bg-primary text-white">
            Start training
          </a>
        </div>
        <div className="navbar-end  2xl:hidden ">
          <div className="avatar avatar-ring avatar-md">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a className="dropdown-item text-sm">Home</a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Resources
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Contact Us
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};
