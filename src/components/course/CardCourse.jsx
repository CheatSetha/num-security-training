import React from 'react'

const CardCourse = () => {
  return (
    <div className='w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow'>
        <h1 className='text-2xl font-semibold text-start'>Title</h1>
        <div className='btn w-full h-10 bg-primary text-white'>
            <p className='text-xl '>Start</p>
        </div>
    </div>
  )
}

export default CardCourse