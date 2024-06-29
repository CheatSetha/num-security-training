"use client";
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import React from "react";

const HeaderTop = () => {
  const { data } = useGetMeQuery();
  // console.log(data?.data.avatar, "name is fetched")
  return (
    <div className="bg-primary h-44">
      <div className="w-10/12 mx-auto flex justify-between items-center h-full">
        <div className="flex gap-4 justify-center items-center">
          <img
            className="w-16 rounded-full avatar-ring"
            src={data?.data.avatar || "/assets/images/userconsole/pf.jpg"}
          />
          <h1 className="text-white text-2xl font-semibold">
            {data?.data?.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
