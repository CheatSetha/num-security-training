"use client";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/store/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials, setCurrentUser } from "@/store/features/auth/authSlice";

// formik component
const validationShcema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();
 
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
  console.log("clicked", value)

 
  try {
  
    const  data  = await register(value).unwrap();
      console.log("data form", data);
      window.localStorage.setItem("accesstoken", data?.token);
      window.localStorage.setItem("refreshToken", data?.refreshToken);
    dispatch(
      setCredentials(data?.data),
      setCurrentUser(data?.data)
  
    );
    console.log(data, "data from register")
    handleGetMe(data?.token)
    alert("Register Successful");
    router.push("/");
  } catch (error) {
    if (!error.response) {
      
      console.log(error)
    } else if (error.response.status === 400) {
      alert("Invalid Email or Password");
    } else if (error.response.status === 403) {
      alert("Forbidden - You don't have permission to access this resource");
    }
  }
};
  return (
    <div className="w-full   pb-8 bg-white z-0">
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

     <div className="w-10/12 z-50 relative   mx-auto">
     <h1 className="text-primary text-3xl pb-5 md:text-5xl font-bold md:mt-20">
        {" "}
        Register New Account!
      </h1>

      <div className="flex justify-evenly gap-x-20 items-center w-full ">
        <Image
          src={"/assets/images/auth/register.svg"}
          height={12}
          width={12}
          className="w-52 md:w-96 max-sm:hidden h-96 "
        />

        <div className="w-full md:w-[400px] max-w-md  text-primary bg-white shadow p-5 rounded-lg">
          {/* register input box */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationShcema}
            onSubmit={handleSubmit}
            
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email">Email</label>
                  <br className="" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border-2  bg-slate-50 border-primary rounded-md mt-2 h-11 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
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
                <div>
                  <label htmlFor="confirmedPassword">Confirm Password</label>
                  <br />
                  <Field
                    name="confirmedPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="border-2 bg-slate-50 border-primary rounded-md mt-2 h-11 w-full"
                  />
                  <ErrorMessage
                    name="confirmedPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md btn"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Page;