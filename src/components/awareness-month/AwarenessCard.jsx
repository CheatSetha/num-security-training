import Image from "next/image";
import Link from "next/link";
import React from "react";

const AwarenessCard = () => {
  const articleId = 1;

  return (
    <div className="w-full h-[230px]  border-b ">
      <div className="justify-between border-gray-200 flex flex-wrap md:flex-row-reverse ">
        <div className="w-full lg:w-5/12 flex justify-center max-sm:pb-3 md:justify-end">
          <Link href={`/awarenessmonth/${articleId}`}>
            <Image
              width={1200}
              height={1200}
              alt="thumnail image of password article"
              className="w-full lg:w-[400px] max-w-md rounded-lg"
              src={"/assets/images/password.jpg"}
            />
          </Link>
        </div>
        <div className="w-full h-full lg:w-7/12">
          <Link href={`/awarenessmonth/${articleId}`}>
            <h1 className="text-xl md:text-2xl text-primary font-semibold text-start pb-4">
              How to create a strong password in 7 easy steps
            </h1>
          </Link>
          <p className=" text-primary text-start">
            Crafting a robust password is paramount in safeguarding your digital
            identity from potential breaches. A strong password serves as a
            formidable barrier against unauthorized access, ensuring the
            security of your sensitive information.
          </p>
        </div>
      </div>
      <small className="text-primary  text-start">
        Posted on March 29 2024
      </small>
    </div>
  );
};

export default AwarenessCard;
