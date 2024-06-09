import Image from 'next/image'
import React from 'react'

const PurposAndObjective = () => {
  return (
    <div className='pb-5'>
        <h1 className='font-semibold text-primary text-3xl  xl:text-4xl mt-12 mb-12'>
            Purpose and Objective of Security Awareness Training

        </h1>
        <Image
          src={"/assets/images/Home/po.jpg"}
          height={400}
          width={600}
          className="w-full"
        />
    </div>
  )
}

export default PurposAndObjective