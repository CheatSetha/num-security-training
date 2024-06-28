"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/features/auth/authApiSlice";
import { setCredentials, setCurrentUser } from "@/store/features/auth/authSlice";
// import { selectToken, setToken } from "@/store/features/auth/authStatus";

// formik component
const validationShcema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});


const Page = () => {
// redux state
const router = useRouter();
const dispatch = useDispatch();
const [login, {isLoading,isError, isSuccess}] = useLoginMutation()
  

const handleGetMe = async (token) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await data.json();
    console.log("response in login page", response);
    if (response.code === 200) {
      dispatch(setCurrentUser(response));
      // set refresh token to local storage
      
    }
  } catch (error) {
    console.log("error", error);
  }
};
const handleSubmit = async (value) => {
 
  try {
    // .unwrap() is a utility function that will return either the fulfilled value or throw the rejected value as an error.
    const  data  = await login(value).unwrap();
      console.log("data form", data);
      window.localStorage.setItem("accesstoken", data?.token);
      window.localStorage.setItem("refreshToken", data?.refreshToken);
    dispatch(
      setCredentials(data),
      setCurrentUser(data)
  
    );
    handleGetMe(data?.token)
    alert("Login Successful");
    router.push("/");
  } catch (error) {
    if (!error.response) {
      alert("No Server Response");
      console.log(error)
    } else if (error.response.status === 400) {
      alert("Missing email or password");
    } else if (error.response.status === 403) {
      alert("Forbidden - You don't have permission to access this resource");
    }
  }
};
// useEffect(()=>{
//   handleGetMe()

// },[])
  return (
    <div className="w-full pb-8  bg-white z-0">
      {/* layout background first */}
      <div className="relative z-10 max-sm:hidden">
        <Image
          src={"/assets/images/auth/bg-1.svg"}
          height={12}
          width={12}
          className="w-full auth-bg absolute max-sm:-mt-60 max-sm:h-96 -mt-60 z-10 lg:-mt-8 xl:-mt-[170px] 2xl:-mt-[400px]"
        />
        <Image
          src={"/assets/images/auth/bg-2.svg"}
          height={12}
          width={12}
          className="w-full auth-bg  absolute max-sm:-mt-60 max-sm:h-96 -mt-60 z-10 lg:-mt-8 xl:-mt-[170px] 2xl:-mt-[400px]"
        />
      </div>

      <div className="w-10/12 z-50 relative z-2  mx-auto">
        <h1 className="text-primary text-5xl font-bold my-5 md:my-20  lg:my-10 xl:my-10 xl:mb-3 2xl:my-20 2xl:mb-6 text-start xl:ms-[110px] min-[1300px]:ms-[160px]  sm:ms-0 ">
          {" "}
          Welcome !
        </h1>

        <div className="flex justify-evenly items-center">
          <div className="lg:w-[450px] w-full max-w-sm  bg-white shadow p-5 rounded-lg">
            <h1 className="mb-5 text-3xl font-semibold text-primary">Login</h1>
            {/* register input box */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationShcema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <label className="text-primary" htmlFor="email">
                      Email
                    </label>
                    <br className="" />
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="border-2 bg-slate-50 border-primary rounded-md mt-2 h-11 w-full"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-primary" htmlFor="password">
                      Password
                    </label>
                    <br />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="border-2 bg-slate-50 border-primary rounded-md mt-2 h-11 w-full"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white rounded-md btn"
                  >
                    Login
                  </button>
                  {/* small text abou don't have account link to register page */}
                  <p className="text-center text-sm">
                    Do not have an account?{" "}
                    <Link href={"/register"} className="text-secondary">
                      Register
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
          <div className="w-96 max-sm:hidden h-96 ">
            <Image
              src={"/assets/images/auth/register.svg"}
              height={12}
              width={12}
              className="w-96 max-sm:hidden h-96 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
