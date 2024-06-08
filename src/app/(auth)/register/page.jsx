"use client";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

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
  return (
    <div className="w-full h-screen">
      {/* layout background first */}
      <Image
        src={"/assets/images/auth/bg-1.svg"}
        height={12}
        width={12}
        className="w-full absolute  max-sm:-mt-60 max-sm:h-96 -mt-60 -z-30"
      />
      <Image
        src={"/assets/images/auth/bg-2.svg"}
        height={12}
        width={12}
        className="w-full absolute max-sm:-mt-60 max-sm:h-96  -mt-60 -z-30"
      />

     <div className="w-10/12 mx-auto">
     <h1 className="text-primary text-5xl font-bold mt-20">
        {" "}
        Register New Account!
      </h1>

      <div className="flex justify-center items-center w-full ">
        <Image
          src={"/assets/images/auth/register.svg"}
          height={12}
          width={12}
          className="w-96 max-sm:hidden h-96 "
        />

        <div className="w-[450px] max-w-sm mx-auto bg-white shadow p-5 rounded-lg">
          {/* register input box */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmedPassword: "",
            }}
            validationSchema={validationShcema}
            onSubmit={(values) => {
              console.log(values);
            }}
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
                    className="border-2 border-primary rounded-md mt-2 h-11 w-full"
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
                    className="border-2 border-primary rounded-md mt-2 h-11 w-full"
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
                    className="border-2 border-primary rounded-md mt-2 h-11 w-full"
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
