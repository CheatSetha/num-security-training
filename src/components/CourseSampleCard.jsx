import Image from "next/image";
import React from "react";

const CourseSampleCard = () => {
  return (
    <div className="lg:w-[290px] w-full bg-secondary h-[220px] rounded-xl p-3">
      <Image
        alt="course-cover"
        className="w-[60%] mx-auto"
        src={"/assets/images/sample.png"}
        width={1200}
        height={1200}
      />

      <h1 className="text-primary text-start text-lg mt-2 line-clamp-2 overflow-clip">
        Fun Cybersecurity awareness training
      </h1>
    </div>
  );
};

export default CourseSampleCard;