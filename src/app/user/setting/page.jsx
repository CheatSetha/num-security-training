"use client";
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import React from "react";

const Page = () => {
  const { data } = useGetMeQuery();
  let userEmail = data?.data.email || "sethacheat@gmail.com";
  const username = data?.data.name || "Setha Cheat";

  const quotes = [
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
    "There are only 10 types of people in the world: those who understand binary and those who do not.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the JavaScript developer sad? Because he did not know how to Null his feelings.",
    "Why do Java developers wear glasses? Because they can't C#.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="py-5">
      <h1 className="font-bold text-3xl mb-8 text-primary text-center">
        Profile Management
      </h1>
      <div className="flex items-center flex-wrap justify-center gap-10">
        <img
          className="w-96 rounded-xl"
          src={data?.data.avatar || "/assets/images/userconsole/pf.jpg"}
        />
        <div className="w-full lg:w-[400px] ">
          {/* form to change email, f9irst name and last name */}
          <form>
            <div className="mb-5 text-primary">
              <label>Email</label>
              <input
                type="email"
                className="w-full ps-2 bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                placeholder={userEmail}
              />
            </div>
            <div className="mb-5 text-primary">
              <label>username</label>
              {/* <input
                disabled
                type="text"
                placeholder={username}
                className="w-full ps-2 bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
              /> */}
               <div className="w-full    ps-2  text-wrap bg-primary  bg-opacity-10 mt-2 h-12 rounded-lg">
                
                <p className="py-2.5">
                {username}
                </p>
                
              </div>
            </div>
            <div className="mb-7 text-primary">
              <label>Qoute of the day</label>
             
              <div className="w-full ps-2 text-wrap bg-primary  bg-opacity-10 mt-2 h-12 rounded-lg">
                <small className="text-primary italic">
                {randomQuote}
                </small>
              </div>
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
