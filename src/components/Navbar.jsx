"use client";

import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import { setCurrentUser } from "@/store/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const { data: user, isLoading, isSuccess } = useGetMeQuery();
  const dispatch = useDispatch();

  isLoading && console.log("loading");
  isSuccess && console.log("get me fetch success");
  isSuccess && console.log(user, "user data");
  isSuccess && dispatch(setCurrentUser(user));

  const handleGetToken = async () => {
    const token = window.localStorage.getItem("accesstoken");
  };

  const handleGetMe = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data?.token}`,
        },
      });
      const response = await data.json();
      console.log("response", response);
      if (response.code === 200) {
        dispatch(setCurrentUser(response.data));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleGetMe();
    handleGetToken();
  }, []);

  let isLogged = user ? true : false;
  return (
    <div className="navbar z-50 p-0 navbar-no-boxShadow mx-auto bg-white">
      <div className="w-full z-50 bg-white mx-auto shadow-sm">
        <div className="navbar px-0 bg-white navbar-no-boxShadow w-10/12 mx-auto">
          <div className="navbar-start">
            <Image
              height={40}
              width={150}
              src={"/assets/images/logo/logo-no-background.png"}
              className="navbar-item flex items-center justify-center"
            />
          </div>
          <div className="navbar-center gap-5 max-md:hidden">
            <Link href={"/"}>
              <div className="navbar-item text-primary text-nowrap">Home</div>
            </Link>
            <Link href={"/resources"}>
              <div className="navbar-item text-primary text-nowrap">
                Resources
              </div>
            </Link>
            <Link href={"/awarenessmonth"}>
              <div className="navbar-item text-primary text-nowrap">Blogs</div>
            </Link>

            <Link href={"/about-us"}>
              <div className="navbar-item text-primary text-nowrap">
                About Us
              </div>
            </Link>
          </div>
          {/* end nav bar items check is IsLoggIn = true display else hidde */}
          {!isLogged ? (
            <div className="navbar-end ">
              <Link
                href={"/login"}
                className="navbar-item max-md:hidden text-primary"
              >
                Sign In
              </Link>
              <Link
                href={"/login"}
                className="navbar-item btn bg-primary text-white"
              >
                Start training
              </Link>
            </div>
          ) : (
            <div className="navbar-end ">
              <div className="avatar avatar-ring avatar-md">
                <div className="dropdown-container ">
                  <div className="dropdown">
                    <label
                      className="btn btn-ghost flex cursor-pointer px-0"
                      tabIndex="0"
                    >
                      <img
                        className="w-16 rounded-full avatar-ring"
                        src={
                          user?.data.avatar ||
                          "/assets/images/userconsole/pf.jpg"
                        }
                      />
                    </label>

                    <div className="dropdown-menu dropdown-menu-bottom-left bg-white">
                      <Link
                        href={"/user/setting"}
                        className="dropdown-item hover:bg-slate-50 text-primary text-sm"
                      >
                        Setting
                      </Link>
                      <Link
                        href={"/user/learningconsole"}
                        tabIndex="-1"
                        className="dropdown-item  hover:bg-slate-50 text-primary text-sm"
                      >
                        Learning Console
                      </Link>
                      <Link
                        href={"/"}
                        tabIndex="-1"
                        className="dropdown-item  hover:bg-slate-50 text-primary text-sm"
                      >
                        Home
                      </Link>
                      <Link
                        href={"/resources"}
                        tabIndex="-1"
                        className="dropdown-item  hover:bg-slate-50 text-primary text-sm"
                      >
                        Resources
                      </Link>
                      <Link
                        href={"/aboutus"}
                        tabIndex="-1"
                        className="dropdown-item  hover:bg-slate-50 text-primary text-sm"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
