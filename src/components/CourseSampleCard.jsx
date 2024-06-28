import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseSampleCard = ({title, thumnail, id}) => {
  const cTitle = title || "Cybersecurity awareness training";
  const cThumnail = thumnail || "/assets/images/sample.png";
  const cId = id || 1;


  return (
    <div className="lg:w-[290px] md:w-[260px]  w-full bg-secondary h-[220px] rounded-xl p-3">
     <Link 
     href={`user/course/${cId}`}
     >
     <img
        alt="course-cover"
        className="md:w-[60%] w-[50%] sm:w-[35%] mx-auto"
        src={cThumnail}
       
      />

      <h1 className="text-primary text-start text-lg mt-2 line-clamp-2 overflow-clip">
       {cTitle}
      </h1>
     </Link>
    </div>
  );
};

export default CourseSampleCard;
