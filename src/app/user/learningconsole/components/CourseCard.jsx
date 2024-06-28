import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({title,cId}) => {
  return (
    <div className="bg-white rounded-[24px] h-[120px] w-11/12 -mt-16 mx-auto p-5 mb-3">
            <Link href={`/user/course/${cId}`}>
              <h5 className="text-primary font-bold text-start  ">
                {title}
              </h5>
            </Link>
            <div className="flex items-center  mt-3 gap-4">
              <progress
                className="progress progress-flat-success w-full "
                value="0"
                max="100"
              ></progress>{" "}
              <Link href={`/user/course/${cId}`}>
                <Image
                  className="w-6 "
                  src={"/assets/images/userconsole/icon-training.svg"}
                  width={12}
                  height={12}
                />
              </Link>
            </div>
            <p className="text-secondary text-end text-sm mt-2">
              0% completed
            </p>
          </div>
  )
}

export default CourseCard