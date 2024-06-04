import Image from 'next/image'
import React from 'react'

const PurposAndObjective = () => {
  return (
    <div className='mb-5'>
        <h1 className='font-semibold text-primary text-4xl my-5 mb-12'>
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