"use client";
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { id, slang } = useParams();
  const router = useRouter();
  const { data, isLoading, isSuccess } = useGetMeQuery();
  console.log(
    data?.data?.enrolledCourses,
    "enrolled courses in section detail"
  );
  // query course by id
  const course = data?.data?.enrolledCourses.find(
    (course) => course._id === id
  );
  const section = course?.sections.find(
    (section) => section.sectionUUID === slang
  );
  // console.log(section,"section by id")
  // console.log(course,"course by id")
  // console.log(section?.details[0]?.videoLink,"video link")

  const handleBack = () => {
    router.back();
  };

  console.log(slang, "section uuid");
  return (
    <div>
      <div className="bg-primary h-20">
        <div className="flex w-10/12 mx-auto  gap-5 items-center h-full">
          <Button onPress={handleBack} className="bg-primary p-0">
            <Image
              className="w-6 cursor-pointer "
              src={"/assets/images/userconsole/arrow-icons-white.svg"}
              width={12}
              height={12}
            />
          </Button>
          <p className="font-semibold text-white text-xl">
            {course?.courseName}
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto my-5 flex flex-wrap flex-shrink gap-5">
        {/* youtube container */}
        <div className="md:w-[70%] ">
          <iframe
            width="100%"
            height="500"
            src={
              section?.details?.videoLink ||
              "https://www.youtube.com/embed/tgbNymZ7vqY"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-xl"
          ></iframe>

          <h1 className="text-2xl text-primary py-5">
            {section?.sectionTitle}
          </h1>
        </div>
        {/* list section container */}
        <div className="w-full md:w-[27%] h-[500px] overflow-auto bg-white rounded-xl shadow">
          <div className="p-5">
            <h1 className="text-xl font-semibold mb-5 text-start">
              Table of Section
            </h1>
            <div className="flex flex-col gap-3">
              {course?.sections.map((section) => (
                <div
                  key={section?.sectionUUID}
                  className="flex justify-between"
                >
                  <Link
                    href={`/user/course/${id}/section/${section?.sectionUUID}`}
                  >
                    <p className="text-lg hover:underline">
                      {section?.sectionTitle}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
