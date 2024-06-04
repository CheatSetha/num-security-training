import React from "react";

const Featurebox = ({icon, title , number}) => {
    const icons = icon? icon:"o"
    const titles = title ? title : "Feature"
    const numbers = number ? number : 1
  return (
    <div className="w-[350px] h-[210px] flex justify-between bg-white shadow-sm rounded-lg ">
      <div className=" p-5">
        <div className="w-[60px] h-[60px] rounded-full bg-primary flex justify-center items-center text-white text-2xl">
          {icons}
        </div>
        <p className="font-bold text-primary mt-3">{titles}</p>
      </div>
      <div className="pe-5">
        <p className="font-bold  text-[65px] text-primary"> {numbers} </p>
      </div>
    </div>
  );
};

export default Featurebox;
