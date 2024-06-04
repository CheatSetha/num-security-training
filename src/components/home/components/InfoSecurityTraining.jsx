import Image from "next/image";
import React from "react";

const InfoSecurityTraining = () => {
  return (
    <div>
      <h1 className="font-semibold text-primary text-4xl my-5 mb-12">
        Security Awareness Training
      </h1>
      <div className="flex flex-wrap">
        <Image
          src={"/assets/images/Home/what-is-awareness.jpg"}
          height={400}
          width={600}
          className="lg:w-6/12 w-full"
        />
        <div className="lg:w-6/12 w-full p-0 lg:ps-10">
          <h1 className="text-[36px] font-semibold text-primary">What is security awareness training?</h1>
          <p className="text-primary text-xl leading-9 ">
            Security awareness training is basically an educational program that
            teaches people about cyberseucity threats and how to protect
            themselves and their organiztions from them.It is like learing
            self-defense against hackers and online scams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSecurityTraining;
