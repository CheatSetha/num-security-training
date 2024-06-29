import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AwarenessCard = ({ id, headerTitle, description, postedAt, image }) => {
  const articleId = id || 1;
  const title =
    headerTitle || "How to create a strong password in 7 easy steps";
  const desc =
    description ||
    "Crafting a robust password is paramount in safeguarding your digital identity from potential breaches. A strong password serves as a formidable barrier against unauthorized access, ensuring the security of your sensitive information.";
  const postDate = postedAt || " March 29 2024";
  const thumnail = image || "/assets/images/password.jpg";
  

  return (
    <div className="w-full h-[230px]  border-b mb-7">
      <div className="justify-between border-gray-200 flex flex-wrap md:flex-row-reverse ">
        <div className="w-full lg:w-5/12 flex justify-center max-sm:pb-3 md:justify-end">
          <Link href={`/awarenessmonth/${articleId}`}>
            <img
              alt="thumnail image of password article"
              className="w-full lg:w-[400px] h-[200px] max-w-md rounded-lg"
              src={thumnail}
            />
          </Link>
        </div>
        <div className="w-full h-full lg:w-7/12">
          <Link href={`/awarenessmonth/${articleId}`}>
            <h1 className="text-xl md:text-2xl text-primary font-semibold text-start pb-4">
              {title}
            </h1>
          </Link>
          <p className=" text-primary text-start">{description}</p>
        </div>
      </div>
      <small className="text-primary  text-start">Posted on {(moment(postDate).format("MMM Do YY"))}</small>
    </div>
  );
};

export default AwarenessCard;
