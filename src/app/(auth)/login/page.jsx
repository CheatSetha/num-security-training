"use client";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";

// formik component
const validationShcema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const Page = () => {
  return (
    <div className="w-full py-10 bg-white z-0">
      {/* layout background first */}
      <div className="relative z-10 max-sm:hidden">
        <Image
          src={"/assets/images/auth/bg-1.svg"}
          height={12}
          width={12}
          className="w-full absolute max-sm:-mt-60 max-sm:h-96 -mt-60 z-10"
        />
        <Image
          src={"/assets/images/auth/bg-2.svg"}
          height={12}
          width={12}
          className="w-full absolute max-sm:-mt-60 max-sm:h-96 -mt-60 z-10"
        />
      </div>

      <div className="w-10/12 z-50 relative z-2  mx-auto">
        <h1 className="text-primary text-5xl font-bold  my-20 text-start xl:ms-44 ms-0">
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
              onSubmit={(values) => {
                console.log(values);
              }}
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
